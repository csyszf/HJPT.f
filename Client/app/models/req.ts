import { Annex } from './Annex';
import { Topic } from './topic';

export class LoginReq {
    public email: string;
    public password: string;
}

export class SignUpReq {
    public nickname: string;
    public password: string;
    public email: string;
}

export class TopicsRep {
    meta: number;
    data: Array<Topic>;
}

export class TopicPublishReq {

    title: string;
    subTitle: string;

    category: number;

    description: string;

    torrent: Annex;
    nfo: Annex;
    cover: Annex;
    screen: Array<Annex>;
}

