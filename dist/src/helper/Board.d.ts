import { type Chess, type Move, type Piece } from 'chess.js';
import type { Color, Key } from 'chessground/types';
import type { Threat } from '@/typings/Chessboard';
export declare function getThreats(moves: Move[]): Threat[];
export declare function shortToLongColor(color: 'w' | 'b'): Color;
export declare function possibleMoves(game: Chess): Map<Key, Key[]>;
export declare function isPromotion(dest: Key, piece: Piece | null): boolean;
export declare function getPossiblePromotions(legalMoves: Move[]): Move[];
export declare function isObject(value: unknown): boolean;
export declare function deepCopy<T>(value: T): T;
export declare function deepMergeConfig<T>(target: T, source: T): T;
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export declare function deepDiffConfig<T>(oldConfig: T, newConfig: T): DeepPartial<T>;
export declare const chessJSPieceToLichessPiece: {
    p: string;
    n: string;
    b: string;
    r: string;
    q: string;
    k: string;
};
export {};
