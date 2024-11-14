import type { BrushColor, CapturedPieces, DrawShape, MaterialDifference } from '@/typings/BoardAPI';
import type BoardConfig from '@/typings/BoardConfig';
import type { BoardState, Emits, Move, MoveEvent, Props, SquareColor } from '@/typings/Chessboard';
import { type Piece, type PieceSymbol, type Color as ShortColor, type Square } from 'chess.js';
import type { Color, Key } from 'chessground/types';
/**
 * class for modifying and reading data from the board
 */
export declare class BoardApi {
    private game;
    private board;
    private boardState;
    private props;
    private emit;
    constructor(boardElement: HTMLElement, boardState: BoardState, props: Props, emit: Emits);
    /**
     * syncs chess.js state with the board
     * @private
     */
    private updateGameState;
    /**
     * Updates the board state to display whether the king of given color is in check
     * @private
     */
    private displayInCheck;
    /**
     * emits neccessary events
     * @private
     */
    private emitEvents;
    /**
     * Changes the turn of the game, triggered by config.movable.events.after
     * @private
     */
    private changeTurn;
    /**
     * Resets the board to the initial starting configuration.
     */
    resetBoard(): void;
    /**
     * undo last move, if possible
     */
    undoLastMove(): void;
    /**
     * returns the current material count for white, black and the diff.
     * If diff > 0 white is leading, else black.
     */
    getMaterialCount(): MaterialDifference;
    /**
     * Finds all the captured pieces from the game history.
     *
     * Note: results may be innaccurate if game history has been lost, eg. if
     * setPosition has been called.
     *
     * @returns an object with white and black properties whose values are arrays
     * of all the pieces captured by that player this game.
     */
    getCapturedPieces(): CapturedPieces;
    /**
     * toggles the board orientation.
     */
    toggleOrientation(): void;
    /**
     * draws arrows and circles on the board for possible moves/captures
     */
    drawMoves(): void;
    /**
     * removes arrows and circles from the board for possible moves/captures
     */
    hideMoves(): void;
    /**
     * draws an arrow on the board
     */
    drawMove(orig: Square, dest: Square, brushColor: BrushColor): void;
    /**
     * toggle drawing of arrows and circles on the board for possible moves/captures
     */
    toggleMoves(): void;
    /**
     * returns the opening name for the current position from lichess api
     */
    getOpeningName(): Promise<string | null>;
    /**
     * make a move programmatically on the board
     * @param move either a string in Standard Algebraic Notation (SAN), eg. 'e4', 'exd5', 'O-O', 'Nf3' or 'e8=Q'
     * or an object of shape { from: string; to: string; promotion?: string; }, eg. { from: 'g8', to: 'f6' } or
     * { from: 'e7', to: 'e8', promotion: 'q'}
     * @returns true if the move was made, false if the move was illegal
     */
    move(move: string | Move): boolean;
    /**
     * returns the current turn color
     * @returns 'white' or 'black'
     */
    getTurnColor(): Color;
    /**
     * returns all possible moves for the current position
     *
     */
    getPossibleMoves(): Map<Key, Key[]> | undefined;
    /**
     *
     * @returns the current turn number
     * @example e4 e5 -> turn number is 2
     */
    getCurrentTurnNumber(): number;
    /**
     *
     * @returns the current ply number
     * @example e4 e5 Nf3 -> ply number is 3
     */
    getCurrentPlyNumber(): number;
    /**
     * returns the latest move made on the board
     */
    getLastMove(): MoveEvent | undefined;
    /**
     * Retrieves the move history.
     *
     * @param verbose - passing true will add more info
     * @example Verbose: [{"color": "w", "from": "e2", "to": "e4", "flags": "b", "piece": "p", "san": "e4"}],  without verbose flag: [ "e7", "e5" ]
     */
    getHistory(): string[];
    getHistory(verbose: false): string[];
    getHistory(verbose: true): MoveEvent[];
    /**
     * Returns the FEN string for the current position.
     */
    getFen(): string;
    /**
     * Returns the board position as a 2D array.
     */
    getBoardPosition(): ({
        square: Square;
        type: PieceSymbol;
        color: ShortColor;
    } | null)[][];
    /**
     * returns the PGN string for the current position.
     */
    getPgn(): string;
    /**
     * returns true of false depending on if the game is over
     */
    getIsGameOver(): boolean;
    /**
     * returns true or false depending on if a player is checkmated
     */
    getIsCheckmate(): boolean;
    /**
     * returns true or false depending on if a player is in check
     */
    getIsCheck(): boolean;
    /**
     * returns true or false depending on if a player is in stalemate
     */
    getIsStalemate(): boolean;
    /**
     * returns true or false depending on if a game is drawn
     */
    getIsDraw(): boolean;
    /**
     * returns true or false depending on if a game is drawn by threefold repetition
     */
    getIsThreefoldRepetition(): boolean;
    /**
     * returns true or false depending on if a game is drawn by insufficient material
     */
    getIsInsufficientMaterial(): boolean;
    /**
     * returns the color of a given square
     */
    getSquareColor(square: Square): SquareColor;
    /**
     * Returns the piece on the square or null if there is no piece
     */
    getSquare(square: Square): Piece | null;
    /**
     * loads a fen into the board
     * Caution: this will erase the game history. To set position with history call loadPgn with a pgn instead
     */
    setPosition(fen: string): void;
    /**
     * puts a piece on a given square on the board
     * returns true on success, else false
     */
    putPiece(piece: Piece, square: Square): boolean;
    /**
     * Removes a piece from the board.
     * @param square - The square where the piece is located.
     */
    removePiece(square: Square): void;
    /**
     * removes all pieces from the board
     */
    clearBoard(): void;
    /**
     * draw multiple arrows on the board
     */
    setShapes(shapes: DrawShape[]): void;
    /**
     * loads a pgn into the board
     *
     * @param pgn - the pgn to load
     */
    loadPgn(pgn: string): void;
    /**
     * returns the header information of the current pgn, if no pgn is loaded, returns an empty object
     * @example {
     * "Event": "IBM Kasparov vs. Deep Blue Rematch",
     * "Site": "New York, NY USA",
     * "Date": "1997.05.11",
     * "Round": "6",
     * "White": "Deep Blue",
     * "Black": "Kasparov, Garry",
     * "Opening": "Caro-Kann: 4...Nd7",
     * "ECO": "B17",
     * "Result": "1-0"
     * }
     */
    getPgnInfo(): {
        [key: string]: string | undefined;
    };
    /**
     * Sets a header in the PGN.
     *
     * @param changes a record of key value pairs to change in the PGN, eg. `{ White: 'Deep Blue', Black: 'Kasparov, Garry' }`
     */
    setPgnInfo(changes: {
        [key: string]: string;
    }): {
        [key: string]: string | undefined;
    };
    /**
     * Sets the config of the board.
     * Caution: providing a config with a fen will erase the game history and change the starting position
     * for resetBoard. To keep history and starting position: omit fen from the given config and call
     * loadPgn with a pgn instead.
     *
     * @param config - a subset of config options, eg. `{ viewOnly: true, animation: { enabled: false } }`
     * or `{ movable: { events: { after: afterFunc }, showDests: false }, drawable: { enabled: false } }`
     * @param fillDefaults - if true unprovided config options will be substituted with default values, if
     * false the unprovided options will remain unchanged.
     */
    setConfig(config: BoardConfig, fillDefaults?: boolean): void;
    /**
     * Views the position at the given ply number in the game's history.
     *
     * @param ply - the ply number of the position to be viewed, where 0 is the initial position, 1 is
     * after white's first move, 2 is after black's first move and so on.
     */
    viewHistory(ply: number): void;
    /**
     * Stops viewing history and returns the board to the present position, ie. after the latest move.
     */
    stopViewingHistory(): void;
    /**
     * Views the starting position of this game.
     */
    viewStart(): void;
    /**
     * If viewing history, views the move after the one currently being viewed.
     * If that move is the latest move, stops viewing history.
     */
    viewNext(): void;
    /**
     * If viewing history, views the previous move to the one currently being viewed.
     * Else, starts viewing history and views the move previous to the latest move.
     */
    viewPrevious(): void;
}
export default BoardApi;
