import { RemoveUser, SetUser, UserLogged } from './userDetails.action';
import { User } from '../../models/user.model';

/*describe('SetUser', () => {
    it('should create an action', () => {
        const payload: User = {
            id: 'test',
            name: 'test',
            email: 'test@email.com',
            image: 'img',
            token: 'string',
            role: 'testRole123',
            preference: { language: 'English', genre: [], theater: []},
            rating: { movieId: 'test123', rating: 'three' }
        };
        const action = new SetUser(payload);
        console.log('action user.....', action);
        expect(action).toEqual({ type: UserLogged.SET_USER}, payload);
    });
});*/

describe('RemoveUser', () => {
    it('should create an action', () => {
        const action = new RemoveUser();
        expect(action).toEqual({ type: UserLogged.REMOVE_USER});
    });
});
