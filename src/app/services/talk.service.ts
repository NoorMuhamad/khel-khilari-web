import Talk from 'talkjs';
export class TalkService {
    public user:any
    private currentUser!: Talk.User;
    async createUser(applicationUser: any) {
        await Talk.ready;
        return new Talk.User({
            id: applicationUser.id,
            name: applicationUser.username,
            photoUrl: applicationUser.photoUrl,
            role: applicationUser.role
        });
    }
    async createCurrentSession() {
        await Talk.ready;
        const user = {
            id: 1,
            username: 'Alice',
            email: 'alice@example.com',
            photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
            welcomeMessage: 'Hey there! How are you? :-)',
            role: 'default'
        };
        this.currentUser = await this.createUser(user);
        const session = new Talk.Session({
            appId: 't0pojXvL',
            me: this.currentUser
        });
        return session;
    }
    private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
        const otherUser = await this.createUser(otherApplicationUser);
        const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
        conversation.setParticipant(this.currentUser);
        conversation.setParticipant(otherUser);
        return conversation;
    }
    async createInbox(session: Talk.Session) {
        this.user=localStorage.getItem('user')
        this.user =JSON.parse(this.user)
        const otherApplicationUser = {
            id: this.user._id,
            username: this.user.displayName,
            email: this.user.email,
            photoUrl: this.user.photoUrl,
            welcomeMessage: 'Hey, how can I help?',
            role: 'default'
        };
        const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
        console.log(conversation)
        const inbox = session.createInbox();
        inbox.select(conversation);
        return inbox;
    }
}
