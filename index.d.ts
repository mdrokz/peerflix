import { Server } from "http";

interface TorrentOpts {
    peerPort: number,
    port: number,
    host: string,
    list: string[]
}

interface ServerOpts {
    blocklist?: string,
    index?: number,
    type?: string,
    filter?: <T>(v: T) => boolean;
    sort?: <S>(a: S, b: S) => number;
}

type Magnet = string | Buffer;

type PeerFlixOpts = ServerOpts & TorrentOpts;

declare function parseBlocklist(filename: string): string[];

declare function truthy(): boolean;

declare function createServer(e: TorrentStream.TorrentEngine): Server;

export = function (torrent: Magnet, opts: PeerFlixOpts): TorrentStream.TorrentEngine { }