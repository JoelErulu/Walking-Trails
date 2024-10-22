import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getUsers, getUser, updateUserRole, deleteUser } from '../actions/users.js';
import * as api from '../api/index.js';
import { FETCH_ALL, FETCH_ONE, START_LOADING, END_LOADING, UPDATE, DELETE } from '../constants/actionTypes';

// Configure mock store with thunk middleware
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// Mock the API functions
jest.mock('../api/index.js');

describe('User Actions', () => {
    let store;

    beforeEach(() => {
        // Create a fresh store before each test
        store = mockStore({});
    });

    afterEach(() => {
        // Clear all mocks after each test
        jest.clearAllMocks();
    });

    it('should handle getUsers success', async () => {
        const users = [{ id: 1, name: 'John Doe' }];
        api.fetchUsers.mockResolvedValue({ data: users });

        await store.dispatch(getUsers());

        const actions = store.getActions();
        expect(actions).toEqual([
            { type: START_LOADING },
            { type: FETCH_ALL, payload: users },
            { type: END_LOADING },
        ]);
    });

    it('should handle getUser success', async () => {
        const user = { id: 1, name: 'John Doe' };
        api.fetchUser.mockResolvedValue({ data: user });

        await store.dispatch(getUser(1));

        const actions = store.getActions();
        expect(actions).toEqual([
            { type: START_LOADING },
            { type: FETCH_ONE, payload: user },
            { type: END_LOADING },
        ]);
    });

    it('should handle updateUserRole success', async () => {
        const updatedUser = { id: 1, name: 'John Doe', roleType: 'admin' };
        api.updateUserRole.mockResolvedValue({ data: updatedUser });

        await store.dispatch(updateUserRole(1, 'admin'));

        const actions = store.getActions();
        expect(actions).toEqual([{ type: UPDATE, payload: updatedUser }]);
    });

    it('should handle deleteUser success', async () => {
        const id = 1;
        api.deleteUser.mockResolvedValue({});

        await store.dispatch(deleteUser(id));

        const actions = store.getActions();
        expect(actions).toEqual([{ type: DELETE, payload: id }]);
    });

    it('should log an error on API failure', async () => {
        const consoleSpy = jest.spyOn(console, 'log');
        api.fetchUsers.mockRejectedValue(new Error('Failed to fetch'));

        await store.dispatch(getUsers());

        expect(consoleSpy).toHaveBeenCalledWith(new Error('Failed to fetch'));
        consoleSpy.mockRestore(); // Restore the original console.log
    });
});
