import { BoardApi } from '@/classes/BoardApi';
import type { Props } from '@/typings/Chessboard';
import type { BoardConfig } from '@/typings/BoardConfig';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    boardConfig: () => {};
    reactiveConfig: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    boardCreated: (boardApi: BoardApi) => void;
    check: (color: import("@/typings/Chessboard").PieceColor) => void;
    stalemate: () => void;
    draw: () => void;
    promotion: (promotion: import("@/typings/Chessboard").PromotionEvent) => void;
    move: (move: import("chess.js").Move) => void;
    checkmate: (color: import("@/typings/Chessboard").PieceColor) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    boardConfig: () => {};
    reactiveConfig: boolean;
}>>> & {
    onCheck?: ((color: import("@/typings/Chessboard").PieceColor) => any) | undefined;
    onMove?: ((move: import("chess.js").Move) => any) | undefined;
    onBoardCreated?: ((boardApi: BoardApi) => any) | undefined;
    onCheckmate?: ((color: import("@/typings/Chessboard").PieceColor) => any) | undefined;
    onStalemate?: (() => any) | undefined;
    onDraw?: (() => any) | undefined;
    onPromotion?: ((promotion: import("@/typings/Chessboard").PromotionEvent) => any) | undefined;
}, {
    boardConfig: BoardConfig;
    reactiveConfig: boolean;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
