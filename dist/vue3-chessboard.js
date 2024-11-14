import { defineComponent as st, openBlock as me, createElementBlock as xe, Fragment as Bt, renderList as Wt, createElementVNode as De, normalizeClass as at, nextTick as Ht, ref as Vt, reactive as Ue, onMounted as jt, watch as Ft, createBlock as Ut, createCommentVNode as Qt } from "vue";
const Gt = {
  class: "promotion-dialog",
  open: ""
}, zt = ["aria-label", "onClick", "onTouchstartPassive"], Zt = /* @__PURE__ */ st({
  __name: "PromotionDialog",
  props: {
    state: {}
  },
  emits: ["promotionSelected"],
  setup(e, { emit: t }) {
    const i = e, o = t, n = [
      { name: "Queen", data: "q" },
      { name: "Knight", data: "n" },
      { name: "Rook", data: "r" },
      { name: "Bishop", data: "b" }
    ];
    function r(s) {
      i.state.callback?.(s.data), o("promotionSelected");
    }
    return (s, a) => (me(), xe("dialog", Gt, [
      (me(), xe(Bt, null, Wt(n, (l) => De("button", {
        key: l.name,
        type: "button",
        class: at([l.name.toLowerCase(), s.state.color]),
        "aria-label": l.name,
        onClick: (c) => r(l),
        onTouchstartPassive: (c) => r(l)
      }, null, 42, zt)), 64))
    ]));
  }
});
/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const A = "w", N = "b", E = "p", Oe = "n", pe = "b", se = "r", Q = "q", M = "k", ke = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", q = -1, Yt = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
}, Xt = [
  "a8",
  "b8",
  "c8",
  "d8",
  "e8",
  "f8",
  "g8",
  "h8",
  "a7",
  "b7",
  "c7",
  "d7",
  "e7",
  "f7",
  "g7",
  "h7",
  "a6",
  "b6",
  "c6",
  "d6",
  "e6",
  "f6",
  "g6",
  "h6",
  "a5",
  "b5",
  "c5",
  "d5",
  "e5",
  "f5",
  "g5",
  "h5",
  "a4",
  "b4",
  "c4",
  "d4",
  "e4",
  "f4",
  "g4",
  "h4",
  "a3",
  "b3",
  "c3",
  "d3",
  "e3",
  "f3",
  "g3",
  "h3",
  "a2",
  "b2",
  "c2",
  "d2",
  "e2",
  "f2",
  "g2",
  "h2",
  "a1",
  "b1",
  "c1",
  "d1",
  "e1",
  "f1",
  "g1",
  "h1"
], g = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
}, b = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
}, Ce = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
}, Qe = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
}, Jt = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
], ei = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
], ti = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 }, ii = "pnbrqkPNBRQK", Ge = [Oe, pe, se, Q], oi = 7, ni = 6, ri = 1, si = 0, ue = {
  [M]: g.KSIDE_CASTLE,
  [Q]: g.QSIDE_CASTLE
}, j = {
  w: [
    { square: b.a1, flag: g.QSIDE_CASTLE },
    { square: b.h1, flag: g.KSIDE_CASTLE }
  ],
  b: [
    { square: b.a8, flag: g.QSIDE_CASTLE },
    { square: b.h8, flag: g.KSIDE_CASTLE }
  ]
}, ai = { b: ri, w: ni }, li = ["1-0", "0-1", "1/2-1/2", "*"];
function J(e) {
  return e >> 4;
}
function ae(e) {
  return e & 15;
}
function ci(e) {
  return "0123456789".indexOf(e) !== -1;
}
function I(e) {
  const t = ae(e), i = J(e);
  return "abcdefgh".substring(t, t + 1) + "87654321".substring(i, i + 1);
}
function oe(e) {
  return e === A ? N : A;
}
function di(e, t) {
  const i = e.from, o = e.to, n = e.piece;
  let r = 0, s = 0, a = 0;
  for (let l = 0, c = t.length; l < c; l++) {
    const p = t[l].from, h = t[l].to, d = t[l].piece;
    n === d && i !== p && o === h && (r++, J(i) === J(p) && s++, ae(i) === ae(p) && a++);
  }
  return r > 0 ? s > 0 && a > 0 ? I(i) : a > 0 ? I(i).charAt(1) : I(i).charAt(0) : "";
}
function F(e, t, i, o, n, r = void 0, s = g.NORMAL) {
  const a = J(o);
  if (n === E && (a === oi || a === si))
    for (let l = 0; l < Ge.length; l++) {
      const c = Ge[l];
      e.push({
        color: t,
        from: i,
        to: o,
        piece: n,
        captured: r,
        promotion: c,
        flags: s | g.PROMOTION
      });
    }
  else
    e.push({
      color: t,
      from: i,
      to: o,
      piece: n,
      captured: r,
      flags: s
    });
}
function ze(e) {
  let t = e.charAt(0);
  return t >= "a" && t <= "h" ? e.match(/[a-h]\d.*[a-h]\d/) ? void 0 : E : (t = t.toLowerCase(), t === "o" ? M : t);
}
function Pe(e) {
  return e.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
class hi {
  _board = new Array(128);
  _turn = A;
  _header = {};
  _kings = { w: q, b: q };
  _epSquare = -1;
  _halfMoves = 0;
  _moveNumber = 0;
  _history = [];
  _comments = {};
  _castling = { w: 0, b: 0 };
  constructor(t = ke) {
    this.load(t);
  }
  clear(t = !1) {
    this._board = new Array(128), this._kings = { w: q, b: q }, this._turn = A, this._castling = { w: 0, b: 0 }, this._epSquare = q, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = t ? this._header : {}, this._updateSetup(this.fen());
  }
  removeHeader(t) {
    t in this._header && delete this._header[t];
  }
  load(t, i = !1) {
    let o = t.split(/\s+/);
    if (o.length >= 2 && o.length < 6) {
      const s = ["-", "-", "0", "1"];
      t = o.concat(s.slice(-(6 - o.length))).join(" ");
    }
    o = t.split(/\s+/);
    const n = o[0];
    let r = 0;
    this.clear(i);
    for (let s = 0; s < n.length; s++) {
      const a = n.charAt(s);
      if (a === "/")
        r += 8;
      else if (ci(a))
        r += parseInt(a, 10);
      else {
        const l = a < "a" ? A : N;
        this.put({ type: a.toLowerCase(), color: l }, I(r)), r++;
      }
    }
    this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= g.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= g.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= g.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= g.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? q : b[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(this.fen());
  }
  fen() {
    let t = 0, i = "";
    for (let r = b.a8; r <= b.h1; r++) {
      if (this._board[r]) {
        t > 0 && (i += t, t = 0);
        const { color: s, type: a } = this._board[r];
        i += s === A ? a.toUpperCase() : a.toLowerCase();
      } else
        t++;
      r + 1 & 136 && (t > 0 && (i += t), r !== b.h1 && (i += "/"), t = 0, r += 8);
    }
    let o = "";
    this._castling[A] & g.KSIDE_CASTLE && (o += "K"), this._castling[A] & g.QSIDE_CASTLE && (o += "Q"), this._castling[N] & g.KSIDE_CASTLE && (o += "k"), this._castling[N] & g.QSIDE_CASTLE && (o += "q"), o = o || "-";
    let n = "-";
    if (this._epSquare !== q) {
      const r = this._epSquare + (this._turn === A ? 16 : -16), s = [r + 1, r - 1];
      for (const a of s) {
        if (a & 136)
          continue;
        const l = this._turn;
        if (this._board[a]?.color === l && this._board[a]?.type === E) {
          this._makeMove({
            color: l,
            from: a,
            to: this._epSquare,
            piece: E,
            captured: E,
            flags: g.EP_CAPTURE
          });
          const c = !this._isKingAttacked(l);
          if (this._undoMove(), c) {
            n = I(this._epSquare);
            break;
          }
        }
      }
    }
    return [
      i,
      this._turn,
      o,
      n,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  /*
   * Called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object. If the FEN
   * is equal to the default position, the SetUp and FEN are deleted the setup
   * is only updated if history.length is zero, ie moves haven't been made.
   */
  _updateSetup(t) {
    this._history.length > 0 || (t !== ke ? (this._header.SetUp = "1", this._header.FEN = t) : (delete this._header.SetUp, delete this._header.FEN));
  }
  reset() {
    this.load(ke);
  }
  get(t) {
    return this._board[b[t]] || !1;
  }
  put({ type: t, color: i }, o) {
    if (ii.indexOf(t.toLowerCase()) === -1 || !(o in b))
      return !1;
    const n = b[o];
    return t == M && !(this._kings[i] == q || this._kings[i] == n) ? !1 : (this._board[n] = { type: t, color: i }, t === M && (this._kings[i] = n), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0);
  }
  remove(t) {
    const i = this.get(t);
    return delete this._board[b[t]], i && i.type === M && (this._kings[i.color] = q), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), i;
  }
  _updateCastlingRights() {
    const t = this._board[b.e1]?.type === M && this._board[b.e1]?.color === A, i = this._board[b.e8]?.type === M && this._board[b.e8]?.color === N;
    (!t || this._board[b.a1]?.type !== se || this._board[b.a1]?.color !== A) && (this._castling.w &= ~g.QSIDE_CASTLE), (!t || this._board[b.h1]?.type !== se || this._board[b.h1]?.color !== A) && (this._castling.w &= ~g.KSIDE_CASTLE), (!i || this._board[b.a8]?.type !== se || this._board[b.a8]?.color !== N) && (this._castling.b &= ~g.QSIDE_CASTLE), (!i || this._board[b.h8]?.type !== se || this._board[b.h8]?.color !== N) && (this._castling.b &= ~g.KSIDE_CASTLE);
  }
  _updateEnPassantSquare() {
    if (this._epSquare === q)
      return;
    const t = this._epSquare + (this._turn === A ? -16 : 16), i = this._epSquare + (this._turn === A ? 16 : -16), o = [i + 1, i - 1];
    if (this._board[t] !== null || this._board[this._epSquare] !== null || this._board[i]?.color !== oe(this._turn) || this._board[i]?.type !== E) {
      this._epSquare = q;
      return;
    }
    const n = (r) => !(r & 136) && this._board[r]?.color === this._turn && this._board[r]?.type === E;
    o.some(n) || (this._epSquare = q);
  }
  _attacked(t, i) {
    for (let o = b.a8; o <= b.h1; o++) {
      if (o & 136) {
        o += 7;
        continue;
      }
      if (this._board[o] === void 0 || this._board[o].color !== t)
        continue;
      const n = this._board[o], r = o - i;
      if (r === 0)
        continue;
      const s = r + 119;
      if (Jt[s] & ti[n.type]) {
        if (n.type === E) {
          if (r > 0) {
            if (n.color === A)
              return !0;
          } else if (n.color === N)
            return !0;
          continue;
        }
        if (n.type === "n" || n.type === "k")
          return !0;
        const a = ei[s];
        let l = o + a, c = !1;
        for (; l !== i; ) {
          if (this._board[l] != null) {
            c = !0;
            break;
          }
          l += a;
        }
        if (!c)
          return !0;
      }
    }
    return !1;
  }
  _isKingAttacked(t) {
    const i = this._kings[t];
    return i === -1 ? !1 : this._attacked(oe(t), i);
  }
  isAttacked(t, i) {
    return this._attacked(i, b[t]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const t = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    }, i = [];
    let o = 0, n = 0;
    for (let r = b.a8; r <= b.h1; r++) {
      if (n = (n + 1) % 2, r & 136) {
        r += 7;
        continue;
      }
      const s = this._board[r];
      s && (t[s.type] = s.type in t ? t[s.type] + 1 : 1, s.type === pe && i.push(n), o++);
    }
    if (o === 2)
      return !0;
    if (
      // k vs. kn .... or .... k vs. kb
      o === 3 && (t[pe] === 1 || t[Oe] === 1)
    )
      return !0;
    if (o === t[pe] + 2) {
      let r = 0;
      const s = i.length;
      for (let a = 0; a < s; a++)
        r += i[a];
      if (r === 0 || r === s)
        return !0;
    }
    return !1;
  }
  isThreefoldRepetition() {
    const t = [], i = {};
    let o = !1;
    for (; ; ) {
      const n = this._undoMove();
      if (!n)
        break;
      t.push(n);
    }
    for (; ; ) {
      const n = this.fen().split(" ").slice(0, 4).join(" ");
      i[n] = n in i ? i[n] + 1 : 1, i[n] >= 3 && (o = !0);
      const r = t.pop();
      if (r)
        this._makeMove(r);
      else
        break;
    }
    return o;
  }
  isDraw() {
    return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
    this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw();
  }
  moves({ verbose: t = !1, square: i = void 0, piece: o = void 0 } = {}) {
    const n = this._moves({ square: i, piece: o });
    return t ? n.map((r) => this._makePretty(r)) : n.map((r) => this._moveToSan(r, n));
  }
  _moves({ legal: t = !0, piece: i = void 0, square: o = void 0 } = {}) {
    const n = o ? o.toLowerCase() : void 0, r = i?.toLowerCase(), s = [], a = this._turn, l = oe(a);
    let c = b.a8, p = b.h1, h = !1;
    if (n)
      if (n in b)
        c = p = b[n], h = !0;
      else
        return [];
    for (let u = c; u <= p; u++) {
      if (u & 136) {
        u += 7;
        continue;
      }
      if (!this._board[u] || this._board[u].color === l)
        continue;
      const { type: m } = this._board[u];
      let f;
      if (m === E) {
        if (r && r !== m)
          continue;
        f = u + Ce[a][0], this._board[f] || (F(s, a, u, f, E), f = u + Ce[a][1], ai[a] === J(u) && !this._board[f] && F(s, a, u, f, E, void 0, g.BIG_PAWN));
        for (let y = 2; y < 4; y++)
          f = u + Ce[a][y], !(f & 136) && (this._board[f]?.color === l ? F(s, a, u, f, E, this._board[f].type, g.CAPTURE) : f === this._epSquare && F(s, a, u, f, E, E, g.EP_CAPTURE));
      } else {
        if (r && r !== m)
          continue;
        for (let y = 0, S = Qe[m].length; y < S; y++) {
          const k = Qe[m][y];
          for (f = u; f += k, !(f & 136); ) {
            if (!this._board[f])
              F(s, a, u, f, m);
            else {
              if (this._board[f].color === a)
                break;
              F(s, a, u, f, m, this._board[f].type, g.CAPTURE);
              break;
            }
            if (m === Oe || m === M)
              break;
          }
        }
      }
    }
    if ((r === void 0 || r === M) && (!h || p === this._kings[a])) {
      if (this._castling[a] & g.KSIDE_CASTLE) {
        const u = this._kings[a], m = u + 2;
        !this._board[u + 1] && !this._board[m] && !this._attacked(l, this._kings[a]) && !this._attacked(l, u + 1) && !this._attacked(l, m) && F(s, a, this._kings[a], m, M, void 0, g.KSIDE_CASTLE);
      }
      if (this._castling[a] & g.QSIDE_CASTLE) {
        const u = this._kings[a], m = u - 2;
        !this._board[u - 1] && !this._board[u - 2] && !this._board[u - 3] && !this._attacked(l, this._kings[a]) && !this._attacked(l, u - 1) && !this._attacked(l, m) && F(s, a, this._kings[a], m, M, void 0, g.QSIDE_CASTLE);
      }
    }
    if (!t || this._kings[a] === -1)
      return s;
    const d = [];
    for (let u = 0, m = s.length; u < m; u++)
      this._makeMove(s[u]), this._isKingAttacked(a) || d.push(s[u]), this._undoMove();
    return d;
  }
  move(t, { strict: i = !1 } = {}) {
    let o = null;
    if (typeof t == "string")
      o = this._moveFromSan(t, i);
    else if (typeof t == "object") {
      const r = this._moves();
      for (let s = 0, a = r.length; s < a; s++)
        if (t.from === I(r[s].from) && t.to === I(r[s].to) && (!("promotion" in r[s]) || t.promotion === r[s].promotion)) {
          o = r[s];
          break;
        }
    }
    if (!o)
      throw typeof t == "string" ? new Error(`Invalid move: ${t}`) : new Error(`Invalid move: ${JSON.stringify(t)}`);
    const n = this._makePretty(o);
    return this._makeMove(o), n;
  }
  _push(t) {
    this._history.push({
      move: t,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _makeMove(t) {
    const i = this._turn, o = oe(i);
    if (this._push(t), this._board[t.to] = this._board[t.from], delete this._board[t.from], t.flags & g.EP_CAPTURE && (this._turn === N ? delete this._board[t.to - 16] : delete this._board[t.to + 16]), t.promotion && (this._board[t.to] = { type: t.promotion, color: i }), this._board[t.to].type === M) {
      if (this._kings[i] = t.to, t.flags & g.KSIDE_CASTLE) {
        const n = t.to - 1, r = t.to + 1;
        this._board[n] = this._board[r], delete this._board[r];
      } else if (t.flags & g.QSIDE_CASTLE) {
        const n = t.to + 1, r = t.to - 2;
        this._board[n] = this._board[r], delete this._board[r];
      }
      this._castling[i] = 0;
    }
    if (this._castling[i]) {
      for (let n = 0, r = j[i].length; n < r; n++)
        if (t.from === j[i][n].square && this._castling[i] & j[i][n].flag) {
          this._castling[i] ^= j[i][n].flag;
          break;
        }
    }
    if (this._castling[o]) {
      for (let n = 0, r = j[o].length; n < r; n++)
        if (t.to === j[o][n].square && this._castling[o] & j[o][n].flag) {
          this._castling[o] ^= j[o][n].flag;
          break;
        }
    }
    t.flags & g.BIG_PAWN ? i === N ? this._epSquare = t.to - 16 : this._epSquare = t.to + 16 : this._epSquare = q, t.piece === E ? this._halfMoves = 0 : t.flags & (g.CAPTURE | g.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, i === N && this._moveNumber++, this._turn = o;
  }
  undo() {
    const t = this._undoMove();
    return t ? this._makePretty(t) : null;
  }
  _undoMove() {
    const t = this._history.pop();
    if (t === void 0)
      return null;
    const i = t.move;
    this._kings = t.kings, this._turn = t.turn, this._castling = t.castling, this._epSquare = t.epSquare, this._halfMoves = t.halfMoves, this._moveNumber = t.moveNumber;
    const o = this._turn, n = oe(o);
    if (this._board[i.from] = this._board[i.to], this._board[i.from].type = i.piece, delete this._board[i.to], i.captured)
      if (i.flags & g.EP_CAPTURE) {
        let r;
        o === N ? r = i.to - 16 : r = i.to + 16, this._board[r] = { type: E, color: n };
      } else
        this._board[i.to] = { type: i.captured, color: n };
    if (i.flags & (g.KSIDE_CASTLE | g.QSIDE_CASTLE)) {
      let r, s;
      i.flags & g.KSIDE_CASTLE ? (r = i.to + 1, s = i.to - 1) : (r = i.to - 2, s = i.to + 1), this._board[r] = this._board[s], delete this._board[s];
    }
    return i;
  }
  pgn({ newline: t = `
`, maxWidth: i = 0 } = {}) {
    const o = [];
    let n = !1;
    for (const d in this._header)
      o.push("[" + d + ' "' + this._header[d] + '"]' + t), n = !0;
    n && this._history.length && o.push(t);
    const r = (d) => {
      const u = this._comments[this.fen()];
      if (typeof u < "u") {
        const m = d.length > 0 ? " " : "";
        d = `${d}${m}{${u}}`;
      }
      return d;
    }, s = [];
    for (; this._history.length > 0; )
      s.push(this._undoMove());
    const a = [];
    let l = "";
    for (s.length === 0 && a.push(r("")); s.length > 0; ) {
      l = r(l);
      const d = s.pop();
      if (!d)
        break;
      if (!this._history.length && d.color === "b") {
        const u = `${this._moveNumber}. ...`;
        l = l ? `${l} ${u}` : u;
      } else
        d.color === "w" && (l.length && a.push(l), l = this._moveNumber + ".");
      l = l + " " + this._moveToSan(d, this._moves({ legal: !0 })), this._makeMove(d);
    }
    if (l.length && a.push(r(l)), typeof this._header.Result < "u" && a.push(this._header.Result), i === 0)
      return o.join("") + a.join(" ");
    const c = function() {
      return o.length > 0 && o[o.length - 1] === " " ? (o.pop(), !0) : !1;
    }, p = function(d, u) {
      for (const m of u.split(" "))
        if (m) {
          if (d + m.length > i) {
            for (; c(); )
              d--;
            o.push(t), d = 0;
          }
          o.push(m), d += m.length, o.push(" "), d++;
        }
      return c() && d--, d;
    };
    let h = 0;
    for (let d = 0; d < a.length; d++) {
      if (h + a[d].length > i && a[d].includes("{")) {
        h = p(h, a[d]);
        continue;
      }
      h + a[d].length > i && d !== 0 ? (o[o.length - 1] === " " && o.pop(), o.push(t), h = 0) : d !== 0 && (o.push(" "), h++), o.push(a[d]), h += a[d].length;
    }
    return o.join("");
  }
  header(...t) {
    for (let i = 0; i < t.length; i += 2)
      typeof t[i] == "string" && typeof t[i + 1] == "string" && (this._header[t[i]] = t[i + 1]);
    return this._header;
  }
  loadPgn(t, { strict: i = !1, newlineChar: o = `\r?
` } = {}) {
    function n(v) {
      return v.replace(/\\/g, "\\");
    }
    function r(v) {
      const T = {}, C = v.split(new RegExp(n(o)));
      let Z = "", Y = "";
      for (let _ = 0; _ < C.length; _++) {
        const V = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
        Z = C[_].replace(V, "$1"), Y = C[_].replace(V, "$2"), Z.trim().length > 0 && (T[Z] = Y);
      }
      return T;
    }
    t = t.trim();
    const a = new RegExp("^(\\[((?:" + n(o) + ")|.)*\\])((?:\\s*" + n(o) + "){2}|(?:\\s*" + n(o) + ")*$)").exec(t), l = a && a.length >= 2 ? a[1] : "";
    this.reset();
    const c = r(l);
    let p = "";
    for (const v in c)
      v.toLowerCase() === "fen" && (p = c[v]), this.header(v, c[v]);
    if (!i)
      p && this.load(p, !0);
    else if (c.SetUp === "1") {
      if (!("FEN" in c))
        throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
      this.load(c.FEN, !0);
    }
    function h(v) {
      return Array.from(v).map(function(T) {
        return T.charCodeAt(0) < 128 ? T.charCodeAt(0).toString(16) : encodeURIComponent(T).replace(/%/g, "").toLowerCase();
      }).join("");
    }
    function d(v) {
      return v.length == 0 ? "" : decodeURIComponent("%" + (v.match(/.{1,2}/g) || []).join("%"));
    }
    const u = function(v) {
      return v = v.replace(new RegExp(n(o), "g"), " "), `{${h(v.slice(1, v.length - 1))}}`;
    }, m = function(v) {
      if (v.startsWith("{") && v.endsWith("}"))
        return d(v.slice(1, v.length - 1));
    };
    let f = t.replace(l, "").replace(
      // encode comments so they don't get deleted below
      new RegExp(`({[^}]*})+?|;([^${n(o)}]*)`, "g"),
      function(v, T, C) {
        return T !== void 0 ? u(T) : " " + u(`{${C.slice(1)}}`);
      }
    ).replace(new RegExp(n(o), "g"), " ");
    const y = /(\([^()]+\))+?/g;
    for (; y.test(f); )
      f = f.replace(y, "");
    f = f.replace(/\d+\.(\.\.)?/g, ""), f = f.replace(/\.\.\./g, ""), f = f.replace(/\$\d+/g, "");
    let S = f.trim().split(new RegExp(/\s+/));
    S = S.filter((v) => v !== "");
    let k = "";
    for (let v = 0; v < S.length; v++) {
      const T = m(S[v]);
      if (T !== void 0) {
        this._comments[this.fen()] = T;
        continue;
      }
      const C = this._moveFromSan(S[v], i);
      if (C == null)
        if (li.indexOf(S[v]) > -1)
          k = S[v];
        else
          throw new Error(`Invalid move in PGN: ${S[v]}`);
      else
        k = "", this._makeMove(C);
    }
    k && Object.keys(this._header).length && !this._header.Result && this.header("Result", k);
  }
  /*
   * Convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} strict Use the strict SAN parser. It will throw errors
   * on overly disambiguated moves (see below):
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  _moveToSan(t, i) {
    let o = "";
    if (t.flags & g.KSIDE_CASTLE)
      o = "O-O";
    else if (t.flags & g.QSIDE_CASTLE)
      o = "O-O-O";
    else {
      if (t.piece !== E) {
        const n = di(t, i);
        o += t.piece.toUpperCase() + n;
      }
      t.flags & (g.CAPTURE | g.EP_CAPTURE) && (t.piece === E && (o += I(t.from)[0]), o += "x"), o += I(t.to), t.promotion && (o += "=" + t.promotion.toUpperCase());
    }
    return this._makeMove(t), this.isCheck() && (this.isCheckmate() ? o += "#" : o += "+"), this._undoMove(), o;
  }
  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  _moveFromSan(t, i = !1) {
    const o = Pe(t);
    let n = ze(o), r = this._moves({ legal: !0, piece: n });
    for (let d = 0, u = r.length; d < u; d++)
      if (o === Pe(this._moveToSan(r[d], r)))
        return r[d];
    if (i)
      return null;
    let s, a, l, c, p, h = !1;
    if (a = o.match(
      /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
      //     piece         from              to       promotion
    ), a ? (s = a[1], l = a[2], c = a[3], p = a[4], l.length == 1 && (h = !0)) : (a = o.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), a && (s = a[1], l = a[2], c = a[3], p = a[4], l.length == 1 && (h = !0))), n = ze(o), r = this._moves({
      legal: !0,
      piece: s || n
    }), !c)
      return null;
    for (let d = 0, u = r.length; d < u; d++)
      if (l) {
        if ((!s || s.toLowerCase() == r[d].piece) && b[l] == r[d].from && b[c] == r[d].to && (!p || p.toLowerCase() == r[d].promotion))
          return r[d];
        if (h) {
          const m = I(r[d].from);
          if ((!s || s.toLowerCase() == r[d].piece) && b[c] == r[d].to && (l == m[0] || l == m[1]) && (!p || p.toLowerCase() == r[d].promotion))
            return r[d];
        }
      } else if (o === Pe(this._moveToSan(r[d], r)).replace("x", ""))
        return r[d];
    return null;
  }
  ascii() {
    let t = `   +------------------------+
`;
    for (let i = b.a8; i <= b.h1; i++) {
      if (ae(i) === 0 && (t += " " + "87654321"[J(i)] + " |"), this._board[i]) {
        const o = this._board[i].type, r = this._board[i].color === A ? o.toUpperCase() : o.toLowerCase();
        t += " " + r + " ";
      } else
        t += " . ";
      i + 1 & 136 && (t += `|
`, i += 8);
    }
    return t += `   +------------------------+
`, t += "     a  b  c  d  e  f  g  h", t;
  }
  perft(t) {
    const i = this._moves({ legal: !1 });
    let o = 0;
    const n = this._turn;
    for (let r = 0, s = i.length; r < s; r++)
      this._makeMove(i[r]), this._isKingAttacked(n) || (t - 1 > 0 ? o += this.perft(t - 1) : o++), this._undoMove();
    return o;
  }
  // pretty = external move object
  _makePretty(t) {
    const { color: i, piece: o, from: n, to: r, flags: s, captured: a, promotion: l } = t;
    let c = "";
    for (const u in g)
      g[u] & s && (c += Yt[u]);
    const p = I(n), h = I(r), d = {
      color: i,
      piece: o,
      from: p,
      to: h,
      san: this._moveToSan(t, this._moves({ legal: !0 })),
      flags: c,
      lan: p + h,
      before: this.fen(),
      after: ""
    };
    return this._makeMove(t), d.after = this.fen(), this._undoMove(), a && (d.captured = a), l && (d.promotion = l, d.lan += l), d;
  }
  turn() {
    return this._turn;
  }
  board() {
    const t = [];
    let i = [];
    for (let o = b.a8; o <= b.h1; o++)
      this._board[o] == null ? i.push(null) : i.push({
        square: I(o),
        type: this._board[o].type,
        color: this._board[o].color
      }), o + 1 & 136 && (t.push(i), i = [], o += 8);
    return t;
  }
  squareColor(t) {
    if (t in b) {
      const i = b[t];
      return (J(i) + ae(i)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose: t = !1 } = {}) {
    const i = [], o = [];
    for (; this._history.length > 0; )
      i.push(this._undoMove());
    for (; ; ) {
      const n = i.pop();
      if (!n)
        break;
      t ? o.push(this._makePretty(n)) : o.push(this._moveToSan(n, this._moves())), this._makeMove(n);
    }
    return o;
  }
  _pruneComments() {
    const t = [], i = {}, o = (n) => {
      n in this._comments && (i[n] = this._comments[n]);
    };
    for (; this._history.length > 0; )
      t.push(this._undoMove());
    for (o(this.fen()); ; ) {
      const n = t.pop();
      if (!n)
        break;
      this._makeMove(n), o(this.fen());
    }
    this._comments = i;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(t) {
    this._comments[this.fen()] = t.replace("{", "[").replace("}", "]");
  }
  deleteComment() {
    const t = this._comments[this.fen()];
    return delete this._comments[this.fen()], t;
  }
  getComments() {
    return this._pruneComments(), Object.keys(this._comments).map((t) => ({ fen: t, comment: this._comments[t] }));
  }
  deleteComments() {
    return this._pruneComments(), Object.keys(this._comments).map((t) => {
      const i = this._comments[t];
      return delete this._comments[t], { fen: t, comment: i };
    });
  }
  setCastlingRights(t, i) {
    for (const n of [M, Q])
      i[n] !== void 0 && (i[n] ? this._castling[t] |= ue[n] : this._castling[t] &= ~ue[n]);
    this._updateCastlingRights();
    const o = this.getCastlingRights(t);
    return (i[M] === void 0 || i[M] === o[M]) && (i[Q] === void 0 || i[Q] === o[Q]);
  }
  getCastlingRights(t) {
    return {
      [M]: (this._castling[t] & ue[M]) !== 0,
      [Q]: (this._castling[t] & ue[Q]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}
function ui(e) {
  const t = [];
  for (const i of e)
    t.push({ orig: i.to, brush: "yellow" }), i.captured && t.push({ orig: i.from, dest: i.to, brush: "red" }), i.san.includes("+") && t.push({ orig: i.from, dest: i.to, brush: "blue" });
  return t;
}
function fe(e) {
  return e === "w" ? "white" : "black";
}
function Ze(e) {
  const t = /* @__PURE__ */ new Map();
  for (const i of Xt) {
    const o = e.moves({ square: i, verbose: !0 });
    o.length && t.set(
      o[0].from,
      o.map((n) => n.to)
    );
  }
  return t;
}
function fi(e, t) {
  if (t?.type !== "p")
    return !1;
  const i = t?.color === "w" ? "8" : "1";
  return e[1] === i;
}
function le(e) {
  return !!e && e instanceof Object && !(e instanceof Array) && !(e instanceof Function);
}
function ge(e) {
  return le(e) ? Object.fromEntries(
    Object.entries(e).map(([t, i]) => [
      t,
      ge(i)
    ])
  ) : e;
}
function lt(e, t) {
  const i = { ...e, ...t };
  for (const o in i)
    i[o] = le(e?.[o]) && le(t?.[o]) ? lt(e[o], t[o]) : ge(i[o]);
  return i;
}
function ct(e, t) {
  const i = {};
  for (const o in t)
    if (le(e?.[o]) && le(t?.[o])) {
      const n = ct(
        e[o],
        t[o]
      );
      Object.keys(n).length > 0 && (i[o] = n);
    } else
      e?.[o] !== t[o] && (i[o] = t[o]);
  return i;
}
const pi = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
}, mi = /* @__PURE__ */ new Map([
  ["b1", ["a3", "c3"]],
  ["g1", ["f3", "h3"]],
  ["a2", ["a3", "a4"]],
  ["b2", ["b3", "b4"]],
  ["c2", ["c3", "c4"]],
  ["d2", ["d3", "d4"]],
  ["e2", ["e3", "e4"]],
  ["f2", ["f3", "f4"]],
  ["g2", ["g3", "g4"]],
  ["h2", ["h3", "h4"]]
]), gi = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", bi = {
  fen: gi,
  orientation: "white",
  turnColor: "white",
  coordinates: !1,
  autoCastle: !0,
  viewOnly: !1,
  disableContextMenu: !1,
  addPieceZIndex: !1,
  blockTouchScroll: !1,
  highlight: {
    lastMove: !0,
    check: !0
  },
  animation: {
    enabled: !0,
    duration: 300
  },
  lastMove: void 0,
  movable: {
    free: !1,
    color: "white",
    showDests: !0,
    dests: mi,
    // We need to specify movable.events.after as an empty function so that we always have something to patch
    // BoardApi.changeTurn onto. Other functions need to be specifed as undefined so that BoardApi.setConfig
    // can reset values back to undefined, eg. if the user calls BoardApi.setConfig({}, true).
    //
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    events: { after: () => {
    }, afterNewPiece: void 0 },
    rookCastle: !0
  },
  premovable: {
    enabled: !0,
    showDests: !0,
    castle: !0,
    events: { set: void 0, unset: void 0 }
  },
  predroppable: {
    enabled: !1,
    events: { set: void 0, unset: void 0 }
  },
  draggable: {
    enabled: !0,
    distance: 3,
    autoDistance: !0,
    showGhost: !0,
    deleteOnDropOff: !1
  },
  selectable: {
    enabled: !0
  },
  events: {
    change: void 0,
    move: void 0,
    dropNewPiece: void 0,
    select: void 0,
    insert: void 0
  },
  drawable: {
    enabled: !0,
    visible: !0,
    defaultSnapToValidMove: !0,
    eraseOnClick: !0,
    shapes: [],
    autoShapes: [],
    brushes: {
      green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
      red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
      blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
      yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
      paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
      paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
      paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
      paleGrey: {
        key: "pgr",
        color: "#4a4a4a",
        opacity: 0.35,
        lineWidth: 15
      }
    }
  }
}, vi = ["white", "black"], be = ["a", "b", "c", "d", "e", "f", "g", "h"], ve = ["1", "2", "3", "4", "5", "6", "7", "8"], _i = [...ve].reverse(), Le = Array.prototype.concat(...be.map((e) => ve.map((t) => e + t))), R = (e) => Le[8 * e[0] + e[1]], w = (e) => [e.charCodeAt(0) - 97, e.charCodeAt(1) - 49], dt = Le.map(w);
function wi(e) {
  let t;
  const i = () => (t === void 0 && (t = e()), t);
  return i.clear = () => {
    t = void 0;
  }, i;
}
const Si = () => {
  let e;
  return {
    start() {
      e = performance.now();
    },
    cancel() {
      e = void 0;
    },
    stop() {
      if (!e)
        return 0;
      const t = performance.now() - e;
      return e = void 0, t;
    }
  };
}, Ke = (e) => e === "white" ? "black" : "white", ce = (e, t) => {
  const i = e[0] - t[0], o = e[1] - t[1];
  return i * i + o * o;
}, qe = (e, t) => e.role === t.role && e.color === t.color, de = (e) => (t, i) => [
  (i ? t[0] : 7 - t[0]) * e.width / 8,
  (i ? 7 - t[1] : t[1]) * e.height / 8
], B = (e, t) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px)`;
}, ht = (e, t, i = 1) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px) scale(${i})`;
}, $e = (e, t) => {
  e.style.visibility = t ? "visible" : "hidden";
}, te = (e) => {
  var t;
  if (e.clientX || e.clientX === 0)
    return [e.clientX, e.clientY];
  if (!((t = e.targetTouches) === null || t === void 0) && t[0])
    return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
}, ut = (e) => e.button === 2, H = (e, t) => {
  const i = document.createElement(e);
  return t && (i.className = t), i;
};
function ft(e, t, i) {
  const o = w(e);
  return t || (o[0] = 7 - o[0], o[1] = 7 - o[1]), [
    i.left + i.width * o[0] / 8 + i.width / 16,
    i.top + i.height * (7 - o[1]) / 8 + i.height / 16
  ];
}
const ee = (e, t) => Math.abs(e - t), yi = (e) => (t, i, o, n) => ee(t, o) < 2 && (e === "white" ? (
  // allow 2 squares from first two ranks, for horde
  n === i + 1 || i <= 1 && n === i + 2 && t === o
) : n === i - 1 || i >= 6 && n === i - 2 && t === o), pt = (e, t, i, o) => {
  const n = ee(e, i), r = ee(t, o);
  return n === 1 && r === 2 || n === 2 && r === 1;
}, mt = (e, t, i, o) => ee(e, i) === ee(t, o), gt = (e, t, i, o) => e === i || t === o, bt = (e, t, i, o) => mt(e, t, i, o) || gt(e, t, i, o), ki = (e, t, i) => (o, n, r, s) => ee(o, r) < 2 && ee(n, s) < 2 || i && n === s && n === (e === "white" ? 0 : 7) && (o === 4 && (r === 2 && t.includes(0) || r === 6 && t.includes(7)) || t.includes(r));
function Ci(e, t) {
  const i = t === "white" ? "1" : "8", o = [];
  for (const [n, r] of e)
    n[1] === i && r.color === t && r.role === "rook" && o.push(w(n)[0]);
  return o;
}
function vt(e, t, i) {
  const o = e.get(t);
  if (!o)
    return [];
  const n = w(t), r = o.role, s = r === "pawn" ? yi(o.color) : r === "knight" ? pt : r === "bishop" ? mt : r === "rook" ? gt : r === "queen" ? bt : ki(o.color, Ci(e, o.color), i);
  return dt.filter((a) => (n[0] !== a[0] || n[1] !== a[1]) && s(n[0], n[1], a[0], a[1])).map(R);
}
function D(e, ...t) {
  e && setTimeout(() => e(...t), 1);
}
function Pi(e) {
  e.orientation = Ke(e.orientation), e.animation.current = e.draggable.current = e.selected = void 0;
}
function Ei(e, t) {
  for (const [i, o] of t)
    o ? e.pieces.set(i, o) : e.pieces.delete(i);
}
function Mi(e, t) {
  if (e.check = void 0, t === !0 && (t = e.turnColor), t)
    for (const [i, o] of e.pieces)
      o.role === "king" && o.color === t && (e.check = i);
}
function Ti(e, t, i, o) {
  z(e), e.premovable.current = [t, i], D(e.premovable.events.set, t, i, o);
}
function G(e) {
  e.premovable.current && (e.premovable.current = void 0, D(e.premovable.events.unset));
}
function Ai(e, t, i) {
  G(e), e.predroppable.current = { role: t, key: i }, D(e.predroppable.events.set, t, i);
}
function z(e) {
  const t = e.predroppable;
  t.current && (t.current = void 0, D(t.events.unset));
}
function xi(e, t, i) {
  if (!e.autoCastle)
    return !1;
  const o = e.pieces.get(t);
  if (!o || o.role !== "king")
    return !1;
  const n = w(t), r = w(i);
  if (n[1] !== 0 && n[1] !== 7 || n[1] !== r[1])
    return !1;
  n[0] === 4 && !e.pieces.has(i) && (r[0] === 6 ? i = R([7, r[1]]) : r[0] === 2 && (i = R([0, r[1]])));
  const s = e.pieces.get(i);
  return !s || s.color !== o.color || s.role !== "rook" ? !1 : (e.pieces.delete(t), e.pieces.delete(i), n[0] < r[0] ? (e.pieces.set(R([6, r[1]]), o), e.pieces.set(R([5, r[1]]), s)) : (e.pieces.set(R([2, r[1]]), o), e.pieces.set(R([3, r[1]]), s)), !0);
}
function _t(e, t, i) {
  const o = e.pieces.get(t), n = e.pieces.get(i);
  if (t === i || !o)
    return !1;
  const r = n && n.color !== o.color ? n : void 0;
  return i === e.selected && L(e), D(e.events.move, t, i, r), xi(e, t, i) || (e.pieces.set(i, o), e.pieces.delete(t)), e.lastMove = [t, i], e.check = void 0, D(e.events.change), r || !0;
}
function Be(e, t, i, o) {
  if (e.pieces.has(i))
    if (o)
      e.pieces.delete(i);
    else
      return !1;
  return D(e.events.dropNewPiece, t, i), e.pieces.set(i, t), e.lastMove = [i], e.check = void 0, D(e.events.change), e.movable.dests = void 0, e.turnColor = Ke(e.turnColor), !0;
}
function wt(e, t, i) {
  const o = _t(e, t, i);
  return o && (e.movable.dests = void 0, e.turnColor = Ke(e.turnColor), e.animation.current = void 0), o;
}
function St(e, t, i) {
  if (We(e, t, i)) {
    const o = wt(e, t, i);
    if (o) {
      const n = e.hold.stop();
      L(e);
      const r = {
        premove: !1,
        ctrlKey: e.stats.ctrlKey,
        holdTime: n
      };
      return o !== !0 && (r.captured = o), D(e.movable.events.after, t, i, r), !0;
    }
  } else if (Oi(e, t, i))
    return Ti(e, t, i, {
      ctrlKey: e.stats.ctrlKey
    }), L(e), !0;
  return L(e), !1;
}
function yt(e, t, i, o) {
  const n = e.pieces.get(t);
  n && (Di(e, t, i) || o) ? (e.pieces.delete(t), Be(e, n, i, o), D(e.movable.events.afterNewPiece, n.role, i, {
    premove: !1,
    predrop: !1
  })) : n && qi(e, t, i) ? Ai(e, n.role, i) : (G(e), z(e)), e.pieces.delete(t), L(e);
}
function Ie(e, t, i) {
  if (D(e.events.select, t), e.selected) {
    if (e.selected === t && !e.draggable.enabled) {
      L(e), e.hold.cancel();
      return;
    } else if ((e.selectable.enabled || i) && e.selected !== t && St(e, e.selected, t)) {
      e.stats.dragged = !1;
      return;
    }
  }
  (e.selectable.enabled || e.draggable.enabled) && (Ct(e, t) || He(e, t)) && (kt(e, t), e.hold.start());
}
function kt(e, t) {
  e.selected = t, He(e, t) ? e.premovable.customDests || (e.premovable.dests = vt(e.pieces, t, e.premovable.castle)) : e.premovable.dests = void 0;
}
function L(e) {
  e.selected = void 0, e.premovable.dests = void 0, e.hold.cancel();
}
function Ct(e, t) {
  const i = e.pieces.get(t);
  return !!i && (e.movable.color === "both" || e.movable.color === i.color && e.turnColor === i.color);
}
const We = (e, t, i) => {
  var o, n;
  return t !== i && Ct(e, t) && (e.movable.free || !!(!((n = (o = e.movable.dests) === null || o === void 0 ? void 0 : o.get(t)) === null || n === void 0) && n.includes(i)));
};
function Di(e, t, i) {
  const o = e.pieces.get(t);
  return !!o && (t === i || !e.pieces.has(i)) && (e.movable.color === "both" || e.movable.color === o.color && e.turnColor === o.color);
}
function He(e, t) {
  const i = e.pieces.get(t);
  return !!i && e.premovable.enabled && e.movable.color === i.color && e.turnColor !== i.color;
}
function Oi(e, t, i) {
  var o, n;
  const r = (n = (o = e.premovable.customDests) === null || o === void 0 ? void 0 : o.get(t)) !== null && n !== void 0 ? n : vt(e.pieces, t, e.premovable.castle);
  return t !== i && He(e, t) && r.includes(i);
}
function qi(e, t, i) {
  const o = e.pieces.get(t), n = e.pieces.get(i);
  return !!o && (!n || n.color !== e.movable.color) && e.predroppable.enabled && (o.role !== "pawn" || i[1] !== "1" && i[1] !== "8") && e.movable.color === o.color && e.turnColor !== o.color;
}
function Ii(e, t) {
  const i = e.pieces.get(t);
  return !!i && e.draggable.enabled && (e.movable.color === "both" || e.movable.color === i.color && (e.turnColor === i.color || e.premovable.enabled));
}
function Ni(e) {
  const t = e.premovable.current;
  if (!t)
    return !1;
  const i = t[0], o = t[1];
  let n = !1;
  if (We(e, i, o)) {
    const r = wt(e, i, o);
    if (r) {
      const s = { premove: !0 };
      r !== !0 && (s.captured = r), D(e.movable.events.after, i, o, s), n = !0;
    }
  }
  return G(e), n;
}
function Ri(e, t) {
  const i = e.predroppable.current;
  let o = !1;
  if (!i)
    return !1;
  if (t(i)) {
    const n = {
      role: i.role,
      color: e.movable.color
    };
    Be(e, n, i.key) && (D(e.movable.events.afterNewPiece, i.role, i.key, {
      premove: !1,
      predrop: !0
    }), o = !0);
  }
  return z(e), o;
}
function Ve(e) {
  G(e), z(e), L(e);
}
function Ye(e) {
  e.movable.color = e.movable.dests = e.animation.current = void 0, Ve(e);
}
function ie(e, t, i) {
  let o = Math.floor(8 * (e[0] - i.left) / i.width);
  t || (o = 7 - o);
  let n = 7 - Math.floor(8 * (e[1] - i.top) / i.height);
  return t || (n = 7 - n), o >= 0 && o < 8 && n >= 0 && n < 8 ? R([o, n]) : void 0;
}
function Li(e, t, i, o) {
  const n = w(e), r = dt.filter((c) => bt(n[0], n[1], c[0], c[1]) || pt(n[0], n[1], c[0], c[1])), a = r.map((c) => ft(R(c), i, o)).map((c) => ce(t, c)), [, l] = a.reduce((c, p, h) => c[0] < p ? c : [p, h], [a[0], 0]);
  return R(r[l]);
}
const O = (e) => e.orientation === "white", Pt = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", Ki = {
  p: "pawn",
  r: "rook",
  n: "knight",
  b: "bishop",
  q: "queen",
  k: "king"
}, $i = {
  pawn: "p",
  rook: "r",
  knight: "n",
  bishop: "b",
  queen: "q",
  king: "k"
};
function Et(e) {
  e === "start" && (e = Pt);
  const t = /* @__PURE__ */ new Map();
  let i = 7, o = 0;
  for (const n of e)
    switch (n) {
      case " ":
      case "[":
        return t;
      case "/":
        if (--i, i < 0)
          return t;
        o = 0;
        break;
      case "~": {
        const r = t.get(R([o - 1, i]));
        r && (r.promoted = !0);
        break;
      }
      default: {
        const r = n.charCodeAt(0);
        if (r < 57)
          o += r - 48;
        else {
          const s = n.toLowerCase();
          t.set(R([o, i]), {
            role: Ki[s],
            color: n === s ? "black" : "white"
          }), ++o;
        }
      }
    }
  return t;
}
function Bi(e) {
  return _i.map((t) => be.map((i) => {
    const o = e.get(i + t);
    if (o) {
      let n = $i[o.role];
      return o.color === "white" && (n = n.toUpperCase()), o.promoted && (n += "~"), n;
    } else
      return "1";
  }).join("")).join("/").replace(/1{2,}/g, (t) => t.length.toString());
}
function Mt(e, t) {
  t.animation && (je(e.animation, t.animation), (e.animation.duration || 0) < 70 && (e.animation.enabled = !1));
}
function Tt(e, t) {
  var i, o, n;
  if (!((i = t.movable) === null || i === void 0) && i.dests && (e.movable.dests = void 0), !((o = t.drawable) === null || o === void 0) && o.autoShapes && (e.drawable.autoShapes = []), je(e, t), t.fen && (e.pieces = Et(t.fen), e.drawable.shapes = ((n = t.drawable) === null || n === void 0 ? void 0 : n.shapes) || []), "check" in t && Mi(e, t.check || !1), "lastMove" in t && !t.lastMove ? e.lastMove = void 0 : t.lastMove && (e.lastMove = t.lastMove), e.selected && kt(e, e.selected), Mt(e, t), !e.movable.rookCastle && e.movable.dests) {
    const r = e.movable.color === "white" ? "1" : "8", s = "e" + r, a = e.movable.dests.get(s), l = e.pieces.get(s);
    if (!a || !l || l.role !== "king")
      return;
    e.movable.dests.set(s, a.filter((c) => !(c === "a" + r && a.includes("c" + r)) && !(c === "h" + r && a.includes("g" + r))));
  }
}
function je(e, t) {
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && (Object.prototype.hasOwnProperty.call(e, i) && Xe(e[i]) && Xe(t[i]) ? je(e[i], t[i]) : e[i] = t[i]);
}
function Xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
const X = (e, t) => t.animation.enabled ? Vi(e, t) : U(e, t);
function U(e, t) {
  const i = e(t);
  return t.dom.redraw(), i;
}
const Ee = (e, t) => ({
  key: e,
  pos: w(e),
  piece: t
}), Wi = (e, t) => t.sort((i, o) => ce(e.pos, i.pos) - ce(e.pos, o.pos))[0];
function Hi(e, t) {
  const i = /* @__PURE__ */ new Map(), o = [], n = /* @__PURE__ */ new Map(), r = [], s = [], a = /* @__PURE__ */ new Map();
  let l, c, p;
  for (const [h, d] of e)
    a.set(h, Ee(h, d));
  for (const h of Le)
    l = t.pieces.get(h), c = a.get(h), l ? c ? qe(l, c.piece) || (r.push(c), s.push(Ee(h, l))) : s.push(Ee(h, l)) : c && r.push(c);
  for (const h of s)
    c = Wi(h, r.filter((d) => qe(h.piece, d.piece))), c && (p = [c.pos[0] - h.pos[0], c.pos[1] - h.pos[1]], i.set(h.key, p.concat(p)), o.push(c.key));
  for (const h of r)
    o.includes(h.key) || n.set(h.key, h.piece);
  return {
    anims: i,
    fadings: n
  };
}
function At(e, t) {
  const i = e.animation.current;
  if (i === void 0) {
    e.dom.destroyed || e.dom.redrawNow();
    return;
  }
  const o = 1 - (t - i.start) * i.frequency;
  if (o <= 0)
    e.animation.current = void 0, e.dom.redrawNow();
  else {
    const n = ji(o);
    for (const r of i.plan.anims.values())
      r[2] = r[0] * n, r[3] = r[1] * n;
    e.dom.redrawNow(!0), requestAnimationFrame((r = performance.now()) => At(e, r));
  }
}
function Vi(e, t) {
  const i = new Map(t.pieces), o = e(t), n = Hi(i, t);
  if (n.anims.size || n.fadings.size) {
    const r = t.animation.current && t.animation.current.start;
    t.animation.current = {
      start: performance.now(),
      frequency: 1 / t.animation.duration,
      plan: n
    }, r || At(t, performance.now());
  } else
    t.dom.redraw();
  return o;
}
const ji = (e) => e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, Fi = ["green", "red", "blue", "yellow"];
function Ui(e, t) {
  if (t.touches && t.touches.length > 1)
    return;
  t.stopPropagation(), t.preventDefault(), t.ctrlKey ? L(e) : Ve(e);
  const i = te(t), o = ie(i, O(e), e.dom.bounds());
  o && (e.drawable.current = {
    orig: o,
    pos: i,
    brush: Zi(t),
    snapToValidMove: e.drawable.defaultSnapToValidMove
  }, xt(e));
}
function xt(e) {
  requestAnimationFrame(() => {
    const t = e.drawable.current;
    if (t) {
      const i = ie(t.pos, O(e), e.dom.bounds());
      i || (t.snapToValidMove = !1);
      const o = t.snapToValidMove ? Li(t.orig, t.pos, O(e), e.dom.bounds()) : i;
      o !== t.mouseSq && (t.mouseSq = o, t.dest = o !== t.orig ? o : void 0, e.dom.redrawNow()), xt(e);
    }
  });
}
function Qi(e, t) {
  e.drawable.current && (e.drawable.current.pos = te(t));
}
function Gi(e) {
  const t = e.drawable.current;
  t && (t.mouseSq && Yi(e.drawable, t), Dt(e));
}
function Dt(e) {
  e.drawable.current && (e.drawable.current = void 0, e.dom.redraw());
}
function zi(e) {
  e.drawable.shapes.length && (e.drawable.shapes = [], e.dom.redraw(), Ot(e.drawable));
}
function Zi(e) {
  var t;
  const i = (e.shiftKey || e.ctrlKey) && ut(e), o = e.altKey || e.metaKey || ((t = e.getModifierState) === null || t === void 0 ? void 0 : t.call(e, "AltGraph"));
  return Fi[(i ? 1 : 0) + (o ? 2 : 0)];
}
function Yi(e, t) {
  const i = (n) => n.orig === t.orig && n.dest === t.dest, o = e.shapes.find(i);
  o && (e.shapes = e.shapes.filter((n) => !i(n))), (!o || o.brush !== t.brush) && e.shapes.push({
    orig: t.orig,
    dest: t.dest,
    brush: t.brush
  }), Ot(e);
}
function Ot(e) {
  e.onChange && e.onChange(e.shapes);
}
function Xi(e, t) {
  if (!(e.trustAllEvents || t.isTrusted) || t.buttons !== void 0 && t.buttons > 1 || t.touches && t.touches.length > 1)
    return;
  const i = e.dom.bounds(), o = te(t), n = ie(o, O(e), i);
  if (!n)
    return;
  const r = e.pieces.get(n), s = e.selected;
  if (!s && e.drawable.enabled && (e.drawable.eraseOnClick || !r || r.color !== e.turnColor) && zi(e), t.cancelable !== !1 && (!t.touches || e.blockTouchScroll || r || s || Ji(e, o)))
    t.preventDefault();
  else if (t.touches)
    return;
  const a = !!e.premovable.current, l = !!e.predroppable.current;
  e.stats.ctrlKey = t.ctrlKey, e.selected && We(e, e.selected, n) ? X((h) => Ie(h, n), e) : Ie(e, n);
  const c = e.selected === n, p = It(e, n);
  if (r && p && c && Ii(e, n)) {
    e.draggable.current = {
      orig: n,
      piece: r,
      origPos: o,
      pos: o,
      started: e.draggable.autoDistance && e.stats.dragged,
      element: p,
      previouslySelected: s,
      originTarget: t.target,
      keyHasChanged: !1
    }, p.cgDragging = !0, p.classList.add("dragging");
    const h = e.dom.elements.ghost;
    h && (h.className = `ghost ${r.color} ${r.role}`, B(h, de(i)(w(n), O(e))), $e(h, !0)), Fe(e);
  } else
    a && G(e), l && z(e);
  e.dom.redraw();
}
function Ji(e, t) {
  const i = O(e), o = e.dom.bounds(), n = Math.pow(o.width / 8, 2);
  for (const r of e.pieces.keys()) {
    const s = ft(r, i, o);
    if (ce(s, t) <= n)
      return !0;
  }
  return !1;
}
function eo(e, t, i, o) {
  const n = "a0";
  e.pieces.set(n, t), e.dom.redraw();
  const r = te(i);
  e.draggable.current = {
    orig: n,
    piece: t,
    origPos: r,
    pos: r,
    started: !0,
    element: () => It(e, n),
    originTarget: i.target,
    newPiece: !0,
    force: !!o,
    keyHasChanged: !1
  }, Fe(e);
}
function Fe(e) {
  requestAnimationFrame(() => {
    var t;
    const i = e.draggable.current;
    if (!i)
      return;
    !((t = e.animation.current) === null || t === void 0) && t.plan.anims.has(i.orig) && (e.animation.current = void 0);
    const o = e.pieces.get(i.orig);
    if (!o || !qe(o, i.piece))
      _e(e);
    else if (!i.started && ce(i.pos, i.origPos) >= Math.pow(e.draggable.distance, 2) && (i.started = !0), i.started) {
      if (typeof i.element == "function") {
        const r = i.element();
        if (!r)
          return;
        r.cgDragging = !0, r.classList.add("dragging"), i.element = r;
      }
      const n = e.dom.bounds();
      B(i.element, [
        i.pos[0] - n.left - n.width / 16,
        i.pos[1] - n.top - n.height / 16
      ]), i.keyHasChanged || (i.keyHasChanged = i.orig !== ie(i.pos, O(e), n));
    }
    Fe(e);
  });
}
function to(e, t) {
  e.draggable.current && (!t.touches || t.touches.length < 2) && (e.draggable.current.pos = te(t));
}
function io(e, t) {
  const i = e.draggable.current;
  if (!i)
    return;
  if (t.type === "touchend" && t.cancelable !== !1 && t.preventDefault(), t.type === "touchend" && i.originTarget !== t.target && !i.newPiece) {
    e.draggable.current = void 0;
    return;
  }
  G(e), z(e);
  const o = te(t) || i.pos, n = ie(o, O(e), e.dom.bounds());
  n && i.started && i.orig !== n ? i.newPiece ? yt(e, i.orig, n, i.force) : (e.stats.ctrlKey = t.ctrlKey, St(e, i.orig, n) && (e.stats.dragged = !0)) : i.newPiece ? e.pieces.delete(i.orig) : e.draggable.deleteOnDropOff && !n && (e.pieces.delete(i.orig), D(e.events.change)), (i.orig === i.previouslySelected || i.keyHasChanged) && (i.orig === n || !n) ? L(e) : e.selectable.enabled || L(e), qt(e), e.draggable.current = void 0, e.dom.redraw();
}
function _e(e) {
  const t = e.draggable.current;
  t && (t.newPiece && e.pieces.delete(t.orig), e.draggable.current = void 0, L(e), qt(e), e.dom.redraw());
}
function qt(e) {
  const t = e.dom.elements;
  t.ghost && $e(t.ghost, !1);
}
function It(e, t) {
  let i = e.dom.elements.board.firstChild;
  for (; i; ) {
    if (i.cgKey === t && i.tagName === "PIECE")
      return i;
    i = i.nextSibling;
  }
}
function oo(e, t) {
  e.exploding = { stage: 1, keys: t }, e.dom.redraw(), setTimeout(() => {
    Je(e, 2), setTimeout(() => Je(e, void 0), 120);
  }, 120);
}
function Je(e, t) {
  e.exploding && (t ? e.exploding.stage = t : e.exploding = void 0, e.dom.redraw());
}
function no(e, t) {
  function i() {
    Pi(e), t();
  }
  return {
    set(o) {
      o.orientation && o.orientation !== e.orientation && i(), Mt(e, o), (o.fen ? X : U)((n) => Tt(n, o), e);
    },
    state: e,
    getFen: () => Bi(e.pieces),
    toggleOrientation: i,
    setPieces(o) {
      X((n) => Ei(n, o), e);
    },
    selectSquare(o, n) {
      o ? X((r) => Ie(r, o, n), e) : e.selected && (L(e), e.dom.redraw());
    },
    move(o, n) {
      X((r) => _t(r, o, n), e);
    },
    newPiece(o, n) {
      X((r) => Be(r, o, n), e);
    },
    playPremove() {
      if (e.premovable.current) {
        if (X(Ni, e))
          return !0;
        e.dom.redraw();
      }
      return !1;
    },
    playPredrop(o) {
      if (e.predroppable.current) {
        const n = Ri(e, o);
        return e.dom.redraw(), n;
      }
      return !1;
    },
    cancelPremove() {
      U(G, e);
    },
    cancelPredrop() {
      U(z, e);
    },
    cancelMove() {
      U((o) => {
        Ve(o), _e(o);
      }, e);
    },
    stop() {
      U((o) => {
        Ye(o), _e(o);
      }, e);
    },
    explode(o) {
      oo(e, o);
    },
    setAutoShapes(o) {
      U((n) => n.drawable.autoShapes = o, e);
    },
    setShapes(o) {
      U((n) => n.drawable.shapes = o, e);
    },
    getKeyAtDomPos(o) {
      return ie(o, O(e), e.dom.bounds());
    },
    redrawAll: t,
    dragNewPiece(o, n, r) {
      eo(e, o, n, r);
    },
    destroy() {
      Ye(e), e.dom.unbind && e.dom.unbind(), e.dom.destroyed = !0;
    }
  };
}
function ro() {
  return {
    pieces: Et(Pt),
    orientation: "white",
    turnColor: "white",
    coordinates: !0,
    coordinatesOnSquares: !1,
    ranksPosition: "right",
    autoCastle: !0,
    viewOnly: !1,
    disableContextMenu: !1,
    addPieceZIndex: !1,
    blockTouchScroll: !1,
    pieceKey: !1,
    trustAllEvents: !1,
    highlight: {
      lastMove: !0,
      check: !0
    },
    animation: {
      enabled: !0,
      duration: 200
    },
    movable: {
      free: !0,
      color: "both",
      showDests: !0,
      events: {},
      rookCastle: !0
    },
    premovable: {
      enabled: !0,
      showDests: !0,
      castle: !0,
      events: {}
    },
    predroppable: {
      enabled: !1,
      events: {}
    },
    draggable: {
      enabled: !0,
      distance: 3,
      autoDistance: !0,
      showGhost: !0,
      deleteOnDropOff: !1
    },
    dropmode: {
      active: !1
    },
    selectable: {
      enabled: !0
    },
    stats: {
      // on touchscreen, default to "tap-tap" moves
      // instead of drag
      dragged: !("ontouchstart" in window)
    },
    events: {},
    drawable: {
      enabled: !0,
      visible: !0,
      defaultSnapToValidMove: !0,
      eraseOnClick: !0,
      shapes: [],
      autoShapes: [],
      brushes: {
        green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
        red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
        blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
        yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
        paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
        paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
        paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
        paleGrey: {
          key: "pgr",
          color: "#4a4a4a",
          opacity: 0.35,
          lineWidth: 15
        },
        purple: { key: "purple", color: "#68217a", opacity: 0.65, lineWidth: 10 },
        pink: { key: "pink", color: "#ee2080", opacity: 0.5, lineWidth: 10 },
        white: { key: "white", color: "white", opacity: 1, lineWidth: 10 }
      },
      prevSvgHash: ""
    },
    hold: Si()
  };
}
const et = {
  hilitePrimary: { key: "hilitePrimary", color: "#3291ff", opacity: 1, lineWidth: 1 },
  hiliteWhite: { key: "hiliteWhite", color: "#ffffff", opacity: 1, lineWidth: 1 }
};
function so() {
  const e = P("defs"), t = x(P("filter"), { id: "cg-filter-blur" });
  return t.appendChild(x(P("feGaussianBlur"), { stdDeviation: "0.019" })), e.appendChild(t), e;
}
function ao(e, t, i) {
  var o;
  const n = e.drawable, r = n.current, s = r && r.mouseSq ? r : void 0, a = /* @__PURE__ */ new Map(), l = e.dom.bounds(), c = n.autoShapes.filter((u) => !u.piece);
  for (const u of n.shapes.concat(c).concat(s ? [s] : [])) {
    if (!u.dest)
      continue;
    const m = (o = a.get(u.dest)) !== null && o !== void 0 ? o : /* @__PURE__ */ new Set(), f = ye(Se(w(u.orig), e.orientation), l), y = ye(Se(w(u.dest), e.orientation), l);
    m.add(Re(f, y)), a.set(u.dest, m);
  }
  const p = n.shapes.concat(c).map((u) => ({
    shape: u,
    current: !1,
    hash: tt(u, Ne(u.dest, a), !1, l)
  }));
  s && p.push({
    shape: s,
    current: !0,
    hash: tt(s, Ne(s.dest, a), !0, l)
  });
  const h = p.map((u) => u.hash).join(";");
  if (h === e.drawable.prevSvgHash)
    return;
  e.drawable.prevSvgHash = h;
  const d = t.querySelector("defs");
  lo(n, p, d), co(p, t.querySelector("g"), i.querySelector("g"), (u) => fo(e, u, n.brushes, a, l));
}
function lo(e, t, i) {
  var o;
  const n = /* @__PURE__ */ new Map();
  let r;
  for (const l of t.filter((c) => c.shape.dest && c.shape.brush))
    r = Nt(e.brushes[l.shape.brush], l.shape.modifiers), !((o = l.shape.modifiers) === null || o === void 0) && o.hilite && n.set(we(r).key, we(r)), n.set(r.key, r);
  const s = /* @__PURE__ */ new Set();
  let a = i.firstElementChild;
  for (; a; )
    s.add(a.getAttribute("cgKey")), a = a.nextElementSibling;
  for (const [l, c] of n.entries())
    s.has(l) || i.appendChild(go(c));
}
function co(e, t, i, o) {
  const n = /* @__PURE__ */ new Map();
  for (const r of e)
    n.set(r.hash, !1);
  for (const r of [t, i]) {
    const s = [];
    let a = r.firstElementChild, l;
    for (; a; )
      l = a.getAttribute("cgHash"), n.has(l) ? n.set(l, !0) : s.push(a), a = a.nextElementSibling;
    for (const c of s)
      r.removeChild(c);
  }
  for (const r of e.filter((s) => !n.get(s.hash)))
    for (const s of o(r))
      s.isCustom ? i.appendChild(s.el) : t.appendChild(s.el);
}
function tt({ orig: e, dest: t, brush: i, piece: o, modifiers: n, customSvg: r, label: s }, a, l, c) {
  var p, h;
  return [
    c.width,
    c.height,
    l,
    e,
    t,
    i,
    a && "-",
    o && ho(o),
    n && uo(n),
    r && `custom-${it(r.html)},${(h = (p = r.center) === null || p === void 0 ? void 0 : p[0]) !== null && h !== void 0 ? h : "o"}`,
    s && `label-${it(s.text)}`
  ].filter((d) => d).join(",");
}
function ho(e) {
  return [e.color, e.role, e.scale].filter((t) => t).join(",");
}
function uo(e) {
  return [e.lineWidth, e.hilite && "*"].filter((t) => t).join(",");
}
function it(e) {
  let t = 0;
  for (let i = 0; i < e.length; i++)
    t = (t << 5) - t + e.charCodeAt(i) >>> 0;
  return t.toString();
}
function fo(e, { shape: t, current: i, hash: o }, n, r, s) {
  var a, l;
  const c = ye(Se(w(t.orig), e.orientation), s), p = t.dest ? ye(Se(w(t.dest), e.orientation), s) : c, h = t.brush && Nt(n[t.brush], t.modifiers), d = r.get(t.dest), u = [];
  if (h) {
    const m = x(P("g"), { cgHash: o });
    u.push({ el: m }), c[0] !== p[0] || c[1] !== p[1] ? m.appendChild(mo(t, h, c, p, i, Ne(t.dest, r))) : m.appendChild(po(n[t.brush], c, i, s));
  }
  if (t.label) {
    const m = t.label;
    (a = m.fill) !== null && a !== void 0 || (m.fill = t.brush && n[t.brush].color);
    const f = t.brush ? void 0 : "tr";
    u.push({ el: bo(m, o, c, p, d, f), isCustom: !0 });
  }
  if (t.customSvg) {
    const m = (l = t.customSvg.center) !== null && l !== void 0 ? l : "orig", [f, y] = m === "label" ? Lt(c, p, d).map((k) => k - 0.5) : m === "dest" ? p : c, S = x(P("g"), { transform: `translate(${f},${y})`, cgHash: o });
    S.innerHTML = `<svg width="1" height="1" viewBox="0 0 100 100">${t.customSvg.html}</svg>`, u.push({ el: S, isCustom: !0 });
  }
  return u;
}
function po(e, t, i, o) {
  const n = vo(), r = (o.width + o.height) / (4 * Math.max(o.width, o.height));
  return x(P("circle"), {
    stroke: e.color,
    "stroke-width": n[i ? 0 : 1],
    fill: "none",
    opacity: Rt(e, i),
    cx: t[0],
    cy: t[1],
    r: r - n[1] / 2
  });
}
function we(e) {
  return ["#ffffff", "#fff", "white"].includes(e.color) ? et.hilitePrimary : et.hiliteWhite;
}
function mo(e, t, i, o, n, r) {
  var s;
  function a(p) {
    var h;
    const d = wo(r && !n), u = o[0] - i[0], m = o[1] - i[1], f = Math.atan2(m, u), y = Math.cos(f) * d, S = Math.sin(f) * d;
    return x(P("line"), {
      stroke: p ? we(t).color : t.color,
      "stroke-width": _o(t, n) + (p ? 0.04 : 0),
      "stroke-linecap": "round",
      "marker-end": `url(#arrowhead-${p ? we(t).key : t.key})`,
      opacity: !((h = e.modifiers) === null || h === void 0) && h.hilite ? 1 : Rt(t, n),
      x1: i[0],
      y1: i[1],
      x2: o[0] - y,
      y2: o[1] - S
    });
  }
  if (!(!((s = e.modifiers) === null || s === void 0) && s.hilite))
    return a(!1);
  const l = P("g"), c = x(P("g"), { filter: "url(#cg-filter-blur)" });
  return c.appendChild(So(i, o)), c.appendChild(a(!0)), l.appendChild(c), l.appendChild(a(!1)), l;
}
function go(e) {
  const t = x(P("marker"), {
    id: "arrowhead-" + e.key,
    orient: "auto",
    overflow: "visible",
    markerWidth: 4,
    markerHeight: 4,
    refX: e.key.startsWith("hilite") ? 1.86 : 2.05,
    refY: 2
  });
  return t.appendChild(x(P("path"), {
    d: "M0,0 V4 L3,2 Z",
    fill: e.color
  })), t.setAttribute("cgKey", e.key), t;
}
function bo(e, t, i, o, n, r) {
  var s;
  const l = 0.4 * 0.75 ** e.text.length, c = Lt(i, o, n), p = r === "tr" ? 0.4 : 0, h = x(P("g"), {
    transform: `translate(${c[0] + p},${c[1] - p})`,
    cgHash: t
  });
  h.appendChild(x(P("circle"), {
    r: 0.4 / 2,
    "fill-opacity": r ? 1 : 0.8,
    "stroke-opacity": r ? 1 : 0.7,
    "stroke-width": 0.03,
    fill: (s = e.fill) !== null && s !== void 0 ? s : "#666",
    stroke: "white"
  }));
  const d = x(P("text"), {
    "font-size": l,
    "font-family": "Noto Sans",
    "text-anchor": "middle",
    fill: "white",
    y: 0.13 * 0.75 ** e.text.length
  });
  return d.innerHTML = e.text, h.appendChild(d), h;
}
function Se(e, t) {
  return t === "white" ? e : [7 - e[0], 7 - e[1]];
}
function Ne(e, t) {
  return (e && t.has(e) && t.get(e).size > 1) === !0;
}
function P(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function x(e, t) {
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.setAttribute(i, t[i]);
  return e;
}
function Nt(e, t) {
  return t ? {
    color: e.color,
    opacity: Math.round(e.opacity * 10) / 10,
    lineWidth: Math.round(t.lineWidth || e.lineWidth),
    key: [e.key, t.lineWidth].filter((i) => i).join("")
  } : e;
}
function vo() {
  return [3 / 64, 4 / 64];
}
function _o(e, t) {
  return (e.lineWidth || 10) * (t ? 0.85 : 1) / 64;
}
function Rt(e, t) {
  return (e.opacity || 1) * (t ? 0.9 : 1);
}
function wo(e) {
  return (e ? 20 : 10) / 64;
}
function ye(e, t) {
  const i = Math.min(1, t.width / t.height), o = Math.min(1, t.height / t.width);
  return [(e[0] - 3.5) * i, (3.5 - e[1]) * o];
}
function So(e, t) {
  const i = {
    from: [Math.floor(Math.min(e[0], t[0])), Math.floor(Math.min(e[1], t[1]))],
    to: [Math.ceil(Math.max(e[0], t[0])), Math.ceil(Math.max(e[1], t[1]))]
  };
  return x(P("rect"), {
    x: i.from[0],
    y: i.from[1],
    width: i.to[0] - i.from[0],
    height: i.to[1] - i.from[1],
    fill: "none",
    stroke: "none"
  });
}
function Re(e, t, i = !0) {
  const o = Math.atan2(t[1] - e[1], t[0] - e[0]) + Math.PI;
  return i ? (Math.round(o * 8 / Math.PI) + 16) % 16 : o;
}
function yo(e, t) {
  return Math.sqrt([e[0] - t[0], e[1] - t[1]].reduce((i, o) => i + o * o, 0));
}
function Lt(e, t, i) {
  let o = yo(e, t);
  const n = Re(e, t, !1);
  if (i && (o -= 33 / 64, i.size > 1)) {
    o -= 10 / 64;
    const r = Re(e, t);
    (i.has((r + 1) % 16) || i.has((r + 15) % 16)) && r & 1 && (o -= 0.4);
  }
  return [e[0] - Math.cos(n) * o, e[1] - Math.sin(n) * o].map((r) => r + 0.5);
}
function ko(e, t) {
  e.innerHTML = "", e.classList.add("cg-wrap");
  for (const l of vi)
    e.classList.toggle("orientation-" + l, t.orientation === l);
  e.classList.toggle("manipulable", !t.viewOnly);
  const i = H("cg-container");
  e.appendChild(i);
  const o = H("cg-board");
  i.appendChild(o);
  let n, r, s;
  if (t.drawable.visible && (n = x(P("svg"), {
    class: "cg-shapes",
    viewBox: "-4 -4 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), n.appendChild(so()), n.appendChild(P("g")), r = x(P("svg"), {
    class: "cg-custom-svgs",
    viewBox: "-3.5 -3.5 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), r.appendChild(P("g")), s = H("cg-auto-pieces"), i.appendChild(n), i.appendChild(r), i.appendChild(s)), t.coordinates) {
    const l = t.orientation === "black" ? " black" : "", c = t.ranksPosition === "left" ? " left" : "";
    if (t.coordinatesOnSquares) {
      const p = t.orientation === "white" ? (h) => h + 1 : (h) => 8 - h;
      be.forEach((h, d) => i.appendChild(Me(ve.map((u) => h + u), "squares rank" + p(d) + l + c)));
    } else
      i.appendChild(Me(ve, "ranks" + l + c)), i.appendChild(Me(be, "files" + l));
  }
  let a;
  return t.draggable.enabled && t.draggable.showGhost && (a = H("piece", "ghost"), $e(a, !1), i.appendChild(a)), {
    board: o,
    container: i,
    wrap: e,
    ghost: a,
    svg: n,
    customSvg: r,
    autoPieces: s
  };
}
function Me(e, t) {
  const i = H("coords", t);
  let o;
  for (const n of e)
    o = H("coord"), o.textContent = n, i.appendChild(o);
  return i;
}
function Co(e, t) {
  if (!e.dropmode.active)
    return;
  G(e), z(e);
  const i = e.dropmode.piece;
  if (i) {
    e.pieces.set("a0", i);
    const o = te(t), n = o && ie(o, O(e), e.dom.bounds());
    n && yt(e, "a0", n);
  }
  e.dom.redraw();
}
function Po(e, t) {
  const i = e.dom.elements.board;
  if ("ResizeObserver" in window && new ResizeObserver(t).observe(e.dom.elements.wrap), (e.disableContextMenu || e.drawable.enabled) && i.addEventListener("contextmenu", (n) => n.preventDefault()), e.viewOnly)
    return;
  const o = Mo(e);
  i.addEventListener("touchstart", o, {
    passive: !1
  }), i.addEventListener("mousedown", o, {
    passive: !1
  });
}
function Eo(e, t) {
  const i = [];
  if ("ResizeObserver" in window || i.push(ne(document.body, "chessground.resize", t)), !e.viewOnly) {
    const o = ot(e, to, Qi), n = ot(e, io, Gi);
    for (const s of ["touchmove", "mousemove"])
      i.push(ne(document, s, o));
    for (const s of ["touchend", "mouseup"])
      i.push(ne(document, s, n));
    const r = () => e.dom.bounds.clear();
    i.push(ne(document, "scroll", r, { capture: !0, passive: !0 })), i.push(ne(window, "resize", r, { passive: !0 }));
  }
  return () => i.forEach((o) => o());
}
function ne(e, t, i, o) {
  return e.addEventListener(t, i, o), () => e.removeEventListener(t, i, o);
}
const Mo = (e) => (t) => {
  e.draggable.current ? _e(e) : e.drawable.current ? Dt(e) : t.shiftKey || ut(t) ? e.drawable.enabled && Ui(e, t) : e.viewOnly || (e.dropmode.active ? Co(e, t) : Xi(e, t));
}, ot = (e, t, i) => (o) => {
  e.drawable.current ? e.drawable.enabled && i(e, o) : e.viewOnly || t(e, o);
};
function To(e) {
  const t = O(e), i = de(e.dom.bounds()), o = e.dom.elements.board, n = e.pieces, r = e.animation.current, s = r ? r.plan.anims : /* @__PURE__ */ new Map(), a = r ? r.plan.fadings : /* @__PURE__ */ new Map(), l = e.draggable.current, c = xo(e), p = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  let m, f, y, S, k, v, T, C, Z, Y;
  for (f = o.firstChild; f; ) {
    if (m = f.cgKey, Kt(f))
      if (y = n.get(m), k = s.get(m), v = a.get(m), S = f.cgPiece, f.cgDragging && (!l || l.orig !== m) && (f.classList.remove("dragging"), B(f, i(w(m), t)), f.cgDragging = !1), !v && f.cgFading && (f.cgFading = !1, f.classList.remove("fading")), y) {
        if (k && f.cgAnimating && S === re(y)) {
          const _ = w(m);
          _[0] += k[2], _[1] += k[3], f.classList.add("anim"), B(f, i(_, t));
        } else
          f.cgAnimating && (f.cgAnimating = !1, f.classList.remove("anim"), B(f, i(w(m), t)), e.addPieceZIndex && (f.style.zIndex = Te(w(m), t)));
        S === re(y) && (!v || !f.cgFading) ? p.add(m) : v && S === re(v) ? (f.classList.add("fading"), f.cgFading = !0) : Ae(d, S, f);
      } else
        Ae(d, S, f);
    else if ($t(f)) {
      const _ = f.className;
      c.get(m) === _ ? h.add(m) : Ae(u, _, f);
    }
    f = f.nextSibling;
  }
  for (const [_, V] of c)
    if (!h.has(_)) {
      Z = u.get(V), Y = Z && Z.pop();
      const K = i(w(_), t);
      if (Y)
        Y.cgKey = _, B(Y, K);
      else {
        const $ = H("square", V);
        $.cgKey = _, B($, K), o.insertBefore($, o.firstChild);
      }
    }
  for (const [_, V] of n)
    if (k = s.get(_), !p.has(_))
      if (T = d.get(re(V)), C = T && T.pop(), C) {
        C.cgKey = _, C.cgFading && (C.classList.remove("fading"), C.cgFading = !1);
        const K = w(_);
        e.addPieceZIndex && (C.style.zIndex = Te(K, t)), k && (C.cgAnimating = !0, C.classList.add("anim"), K[0] += k[2], K[1] += k[3]), B(C, i(K, t));
      } else {
        const K = re(V), $ = H("piece", K), he = w(_);
        $.cgPiece = K, $.cgKey = _, k && ($.cgAnimating = !0, he[0] += k[2], he[1] += k[3]), B($, i(he, t)), e.addPieceZIndex && ($.style.zIndex = Te(he, t)), o.appendChild($);
      }
  for (const _ of d.values())
    rt(e, _);
  for (const _ of u.values())
    rt(e, _);
}
function Ao(e) {
  const t = O(e), i = de(e.dom.bounds());
  let o = e.dom.elements.board.firstChild;
  for (; o; )
    (Kt(o) && !o.cgAnimating || $t(o)) && B(o, i(w(o.cgKey), t)), o = o.nextSibling;
}
function nt(e) {
  var t, i;
  const o = e.dom.elements.wrap.getBoundingClientRect(), n = e.dom.elements.container, r = o.height / o.width, s = Math.floor(o.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio, a = s * r;
  n.style.width = s + "px", n.style.height = a + "px", e.dom.bounds.clear(), (t = e.addDimensionsCssVarsTo) === null || t === void 0 || t.style.setProperty("---cg-width", s + "px"), (i = e.addDimensionsCssVarsTo) === null || i === void 0 || i.style.setProperty("---cg-height", a + "px");
}
const Kt = (e) => e.tagName === "PIECE", $t = (e) => e.tagName === "SQUARE";
function rt(e, t) {
  for (const i of t)
    e.dom.elements.board.removeChild(i);
}
function Te(e, t) {
  const o = e[1];
  return `${t ? 3 + 7 - o : 3 + o}`;
}
const re = (e) => `${e.color} ${e.role}`;
function xo(e) {
  var t, i, o;
  const n = /* @__PURE__ */ new Map();
  if (e.lastMove && e.highlight.lastMove)
    for (const a of e.lastMove)
      W(n, a, "last-move");
  if (e.check && e.highlight.check && W(n, e.check, "check"), e.selected && (W(n, e.selected, "selected"), e.movable.showDests)) {
    const a = (t = e.movable.dests) === null || t === void 0 ? void 0 : t.get(e.selected);
    if (a)
      for (const c of a)
        W(n, c, "move-dest" + (e.pieces.has(c) ? " oc" : ""));
    const l = (o = (i = e.premovable.customDests) === null || i === void 0 ? void 0 : i.get(e.selected)) !== null && o !== void 0 ? o : e.premovable.dests;
    if (l)
      for (const c of l)
        W(n, c, "premove-dest" + (e.pieces.has(c) ? " oc" : ""));
  }
  const r = e.premovable.current;
  if (r)
    for (const a of r)
      W(n, a, "current-premove");
  else
    e.predroppable.current && W(n, e.predroppable.current.key, "current-premove");
  const s = e.exploding;
  if (s)
    for (const a of s.keys)
      W(n, a, "exploding" + s.stage);
  return e.highlight.custom && e.highlight.custom.forEach((a, l) => {
    W(n, l, a);
  }), n;
}
function W(e, t, i) {
  const o = e.get(t);
  o ? e.set(t, `${o} ${i}`) : e.set(t, i);
}
function Ae(e, t, i) {
  const o = e.get(t);
  o ? o.push(i) : e.set(t, [i]);
}
function Do(e, t, i) {
  const o = /* @__PURE__ */ new Map(), n = [];
  for (const a of e)
    o.set(a.hash, !1);
  let r = t.firstElementChild, s;
  for (; r; )
    s = r.getAttribute("cgHash"), o.has(s) ? o.set(s, !0) : n.push(r), r = r.nextElementSibling;
  for (const a of n)
    t.removeChild(a);
  for (const a of e)
    o.get(a.hash) || t.appendChild(i(a));
}
function Oo(e, t) {
  const o = e.drawable.autoShapes.filter((n) => n.piece).map((n) => ({
    shape: n,
    hash: No(n),
    current: !1
  }));
  Do(o, t, (n) => Io(e, n, e.dom.bounds()));
}
function qo(e) {
  var t;
  const i = O(e), o = de(e.dom.bounds());
  let n = (t = e.dom.elements.autoPieces) === null || t === void 0 ? void 0 : t.firstChild;
  for (; n; )
    ht(n, o(w(n.cgKey), i), n.cgScale), n = n.nextSibling;
}
function Io(e, { shape: t, hash: i }, o) {
  var n, r, s;
  const a = t.orig, l = (n = t.piece) === null || n === void 0 ? void 0 : n.role, c = (r = t.piece) === null || r === void 0 ? void 0 : r.color, p = (s = t.piece) === null || s === void 0 ? void 0 : s.scale, h = H("piece", `${l} ${c}`);
  return h.setAttribute("cgHash", i), h.cgKey = a, h.cgScale = p, ht(h, de(o)(w(a), O(e)), p), h;
}
const No = (e) => {
  var t, i, o;
  return [e.orig, (t = e.piece) === null || t === void 0 ? void 0 : t.role, (i = e.piece) === null || i === void 0 ? void 0 : i.color, (o = e.piece) === null || o === void 0 ? void 0 : o.scale].join(",");
};
function Ro(e, t) {
  const i = ro();
  Tt(i, t || {});
  function o() {
    const n = "dom" in i ? i.dom.unbind : void 0, r = ko(e, i), s = wi(() => r.board.getBoundingClientRect()), a = (p) => {
      To(c), r.autoPieces && Oo(c, r.autoPieces), !p && r.svg && ao(c, r.svg, r.customSvg);
    }, l = () => {
      nt(c), Ao(c), r.autoPieces && qo(c);
    }, c = i;
    return c.dom = {
      elements: r,
      bounds: s,
      redraw: Lo(a),
      redrawNow: a,
      unbind: n
    }, c.drawable.prevSvgHash = "", nt(c), a(!1), Po(c, l), n || (c.dom.unbind = Eo(c, l)), c.events.insert && c.events.insert(r), c;
  }
  return no(o(), o);
}
function Lo(e) {
  let t = !1;
  return () => {
    t || (t = !0, requestAnimationFrame(() => {
      e(), t = !1;
    }));
  };
}
class Ko {
  game;
  board;
  boardState;
  props;
  emit;
  constructor(t, i, o, n) {
    this.boardState = i, this.props = o, this.emit = n, this.game = new hi(), this.board = Ro(t), this.resetBoard();
  }
  //
  //  PRIVATE INTERAL METHODS:
  //
  /**
   * syncs chess.js state with the board
   * @private
   */
  updateGameState({ updateFen: t = !0 } = {}) {
    this.boardState.historyViewerState.isEnabled || (t && this.board.set({ fen: this.game.fen() }), this.board.state.turnColor = this.getTurnColor(), this.board.state.movable.free ? (this.board.state.movable.color = "both", this.board.state.movable.dests = /* @__PURE__ */ new Map()) : (this.board.state.movable.color = this.props.playerColor || this.board.state.turnColor, this.board.state.movable.dests = Ze(this.game)), this.displayInCheck(this.game.inCheck(), this.board.state.turnColor), this.boardState.showThreats && this.drawMoves()), this.emitEvents();
  }
  /**
   * Updates the board state to display whether the king of given color is in check
   * @private
   */
  displayInCheck(t, i) {
    if (t) {
      for (const [o, n] of this.board.state.pieces)
        if (n.role === "king" && n.color === i) {
          this.board.state.check = o;
          return;
        }
    } else
      this.board.state.check = void 0;
  }
  /**
   * emits neccessary events
   * @private
   */
  emitEvents() {
    this.game.inCheck() && this.emit(
      this.game.isCheckmate() ? "checkmate" : "check",
      this.board.state.turnColor
    ), this.game.isDraw() && this.emit("draw"), this.game.isStalemate() && this.emit("stalemate");
  }
  /**
   * Changes the turn of the game, triggered by config.movable.events.after
   * @private
   */
  async changeTurn(t, i, o) {
    let n;
    fi(i, this.game.get(t)) && (n = await new Promise((r) => {
      this.boardState.promotionDialogState = {
        isEnabled: !0,
        color: this.getTurnColor(),
        callback: r
      };
    })), this.move({
      from: t,
      to: i,
      promotion: n
    });
  }
  //
  //  PUBLIC API METHODS:
  //
  /**
   * Resets the board to the initial starting configuration.
   */
  resetBoard() {
    this.setConfig(this.props.boardConfig, !0);
  }
  /**
   * undo last move, if possible
   */
  undoLastMove() {
    const t = this.game.undo();
    if (t != null && (this.boardState.historyViewerState.isEnabled && this.boardState.historyViewerState.plyViewing === this.getCurrentPlyNumber() && this.stopViewingHistory(), !this.boardState.historyViewerState.isEnabled)) {
      this.board.set({ fen: t.before }), this.updateGameState({ updateFen: !1 });
      const i = this.getLastMove();
      this.board.state.lastMove = i ? [i?.from, i?.to] : void 0;
    }
  }
  /**
   * returns the current material count for white, black and the diff.
   * If diff > 0 white is leading, else black.
   */
  getMaterialCount() {
    const t = this.board.state.pieces, i = {
      pawn: 1,
      knight: 3,
      bishop: 3,
      rook: 5,
      queen: 9,
      king: 0
    }, o = {
      materialWhite: 0,
      materialBlack: 0,
      materialDiff: 0
    };
    for (const n of t)
      n[1].color === "white" ? o.materialWhite += i[n[1].role] : o.materialBlack += i[n[1].role];
    return o.materialDiff = o.materialWhite - o.materialBlack, o;
  }
  /**
   * Finds all the captured pieces from the game history.
   *
   * Note: results may be innaccurate if game history has been lost, eg. if
   * setPosition has been called.
   *
   * @returns an object with white and black properties whose values are arrays
   * of all the pieces captured by that player this game.
   */
  getCapturedPieces() {
    const t = {
      white: [],
      black: []
    };
    for (const { color: i, captured: o } of this.getHistory(!0))
      o && t[fe(i)].push(o);
    return t;
  }
  /**
   * toggles the board orientation.
   */
  toggleOrientation() {
    this.board.toggleOrientation();
  }
  /**
   * draws arrows and circles on the board for possible moves/captures
   */
  drawMoves() {
    this.boardState.showThreats = !0, this.board.setShapes(ui(this.game.moves({ verbose: !0 })));
  }
  /**
   * removes arrows and circles from the board for possible moves/captures
   */
  hideMoves() {
    this.boardState.showThreats = !1, this.board.setShapes([]);
  }
  /**
   * draws an arrow on the board
   */
  drawMove(t, i, o) {
    this.board.setShapes([
      {
        orig: t,
        dest: i,
        brush: o
      }
    ]);
  }
  /**
   * toggle drawing of arrows and circles on the board for possible moves/captures
   */
  toggleMoves() {
    this.boardState.showThreats ? this.hideMoves() : this.drawMoves();
  }
  /**
   * returns the opening name for the current position from lichess api
   */
  async getOpeningName() {
    try {
      const t = this.game.history({ verbose: !0 }).map((n) => n.lan).join(",");
      return (await (await fetch(
        `https://explorer.lichess.ovh/masters?play=${t}`
      )).json()).opening?.name ?? null;
    } catch {
      return null;
    }
  }
  /**
   * make a move programmatically on the board
   * @param move either a string in Standard Algebraic Notation (SAN), eg. 'e4', 'exd5', 'O-O', 'Nf3' or 'e8=Q'
   * or an object of shape { from: string; to: string; promotion?: string; }, eg. { from: 'g8', to: 'f6' } or
   * { from: 'e7', to: 'e8', promotion: 'q'}
   * @returns true if the move was made, false if the move was illegal
   */
  move(t) {
    let i;
    try {
      i = this.game.move(t);
    } catch {
      return typeof t == "object" && this.board.state.movable.free && (this.board.move(t.from, t.to), this.updateGameState({ updateFen: !1 })), !1;
    }
    return this.emit("move", i), i?.promotion && this.emit("promotion", {
      color: fe(i.color),
      promotedTo: i.promotion.toUpperCase(),
      sanMove: i.san
    }), this.boardState.historyViewerState.isEnabled || (this.board.move(i.from, i.to), (i.flags === "e" || i?.promotion) && setTimeout(
      () => this.board.set({ fen: i.after }),
      this.board.state.animation.current ? this.board.state.animation.duration : 0
    ), this.updateGameState({ updateFen: !1 }), Ht(this.board.playPremove)), !0;
  }
  /**
   * returns the current turn color
   * @returns 'white' or 'black'
   */
  getTurnColor() {
    return fe(this.game.turn());
  }
  /**
   * returns all possible moves for the current position
   *
   */
  getPossibleMoves() {
    return Ze(this.game);
  }
  /**
   *
   * @returns the current turn number
   * @example e4 e5 -> turn number is 2
   */
  getCurrentTurnNumber() {
    return this.game.moveNumber();
  }
  /**
   *
   * @returns the current ply number
   * @example e4 e5 Nf3 -> ply number is 3
   */
  getCurrentPlyNumber() {
    return 2 * this.getCurrentTurnNumber() - (this.getTurnColor() === "black" ? 1 : 2);
  }
  /**
   * returns the latest move made on the board
   */
  getLastMove() {
    return this.game.history({ verbose: !0 }).at(-1);
  }
  getHistory(t = !1) {
    return this.game.history({ verbose: t });
  }
  /**
   * Returns the FEN string for the current position.
   */
  getFen() {
    return this.game.fen();
  }
  /**
   * Returns the board position as a 2D array.
   */
  getBoardPosition() {
    return this.game.board();
  }
  /**
   * returns the PGN string for the current position.
   */
  getPgn() {
    return this.game.pgn();
  }
  /**
   * returns true of false depending on if the game is over
   */
  getIsGameOver() {
    return this.game.isGameOver();
  }
  /**
   * returns true or false depending on if a player is checkmated
   */
  getIsCheckmate() {
    return this.game.isCheckmate();
  }
  /**
   * returns true or false depending on if a player is in check
   */
  getIsCheck() {
    return this.game.isCheck();
  }
  /**
   * returns true or false depending on if a player is in stalemate
   */
  getIsStalemate() {
    return this.game.isStalemate();
  }
  /**
   * returns true or false depending on if a game is drawn
   */
  getIsDraw() {
    return this.game.isDraw();
  }
  /**
   * returns true or false depending on if a game is drawn by threefold repetition
   */
  getIsThreefoldRepetition() {
    return this.game.isThreefoldRepetition();
  }
  /**
   * returns true or false depending on if a game is drawn by insufficient material
   */
  getIsInsufficientMaterial() {
    return this.game.isInsufficientMaterial();
  }
  /**
   * returns the color of a given square
   */
  getSquareColor(t) {
    return this.game.squareColor(t);
  }
  /**
   * Returns the piece on the square or null if there is no piece
   */
  getSquare(t) {
    return this.game.get(t);
  }
  /**
   * loads a fen into the board
   * Caution: this will erase the game history. To set position with history call loadPgn with a pgn instead
   */
  setPosition(t) {
    this.game.load(t), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
  }
  /**
   * puts a piece on a given square on the board
   * returns true on success, else false
   */
  putPiece(t, i) {
    if (this.board.state.movable.free) {
      const o = this.board.state.pieces;
      return o.set(i, {
        color: t.color === "w" ? "white" : "black",
        role: pi[t.type]
      }), this.board.setPieces(o), !0;
    } else {
      const o = this.game.put(t, i);
      return o && this.updateGameState(), o;
    }
  }
  /**
   * Removes a piece from the board.
   * @param square - The square where the piece is located.
   */
  removePiece(t) {
    this.board.state.pieces.delete(t), this.game.remove(t);
  }
  /**
   * removes all pieces from the board
   */
  clearBoard() {
    this.game.clear(), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
  }
  /**
   * draw multiple arrows on the board
   */
  setShapes(t) {
    this.board.setShapes(t);
  }
  /**
   * loads a pgn into the board
   *
   * @param pgn - the pgn to load
   */
  loadPgn(t) {
    this.game.loadPgn(t), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
    const i = this.getLastMove();
    i && this.board.set({ lastMove: [i.from, i.to] });
  }
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
  getPgnInfo() {
    return this.game.header();
  }
  /**
   * Sets a header in the PGN.
   *
   * @param changes a record of key value pairs to change in the PGN, eg. `{ White: 'Deep Blue', Black: 'Kasparov, Garry' }`
   */
  setPgnInfo(t) {
    return this.game.header(...Object.entries(t).flat());
  }
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
  setConfig(t, i = !1) {
    if (i && (t = lt(bi, t), this.board.state.selected = void 0), t.movable?.events && "after" in t.movable.events) {
      const r = t.movable.events.after;
      t.movable.events.after = r ? async (...s) => {
        await this.changeTurn(...s), r(...s);
      } : this.changeTurn.bind(this);
    }
    const { fen: o, ...n } = t;
    this.board.set(n), o && this.setPosition(o), this.board.redrawAll();
  }
  /**
   * Views the position at the given ply number in the game's history.
   *
   * @param ply - the ply number of the position to be viewed, where 0 is the initial position, 1 is
   * after white's first move, 2 is after black's first move and so on.
   */
  viewHistory(t) {
    const i = this.getHistory(!0);
    if (t < 0 || t > i.length)
      return;
    const o = this.board.state.animation.enabled && (this.boardState.historyViewerState.isEnabled && Math.abs(this.boardState.historyViewerState.plyViewing - t) !== 1 || !this.boardState.historyViewerState.isEnabled && t !== i.length - 1);
    if (o && this.board.set({ animation: { enabled: !1 } }), t < i.length)
      this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing = t : this.boardState.historyViewerState = {
        isEnabled: !0,
        plyViewing: t,
        viewOnly: this.board.state.viewOnly
      }, this.board.set({
        fen: i[t].before,
        viewOnly: !0,
        lastMove: t > 0 ? [i[t - 1].from, i[t - 1].to] : void 0,
        selected: void 0
      }), this.displayInCheck(
        t > 0 ? "+#".includes(i[t - 1].san.at(-1)) : !1,
        fe(i[t].color)
      ), this.board.cancelPremove();
    else if (this.boardState.historyViewerState.isEnabled) {
      const n = i.at(-1);
      this.board.set({
        fen: n.after,
        viewOnly: this.boardState.historyViewerState.viewOnly,
        lastMove: [n.from, n.to]
      }), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState({ updateFen: !1 });
    }
    o && this.board.set({ animation: { enabled: !0 } });
  }
  /**
   * Stops viewing history and returns the board to the present position, ie. after the latest move.
   */
  stopViewingHistory() {
    this.boardState.historyViewerState.isEnabled && this.viewHistory(this.getCurrentPlyNumber());
  }
  /**
   * Views the starting position of this game.
   */
  viewStart() {
    this.viewHistory(0);
  }
  /**
   * If viewing history, views the move after the one currently being viewed.
   * If that move is the latest move, stops viewing history.
   */
  viewNext() {
    this.boardState.historyViewerState.isEnabled && this.viewHistory(this.boardState.historyViewerState.plyViewing + 1);
  }
  /**
   * If viewing history, views the previous move to the one currently being viewed.
   * Else, starts viewing history and views the move previous to the latest move.
   */
  viewPrevious() {
    const t = this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing : this.getCurrentPlyNumber();
    this.viewHistory(t - 1);
  }
}
const $o = { class: "main-board" }, Wo = /* @__PURE__ */ st({
  __name: "TheChessboard",
  props: {
    boardConfig: { default: () => ({}) },
    playerColor: {},
    reactiveConfig: { type: Boolean, default: !1 }
  },
  emits: ["boardCreated", "check", "checkmate", "stalemate", "draw", "promotion", "move"],
  setup(e, { emit: t }) {
    const i = e, o = t, n = Vt(null), r = Ue({
      showThreats: !1,
      promotionDialogState: { isEnabled: !1 },
      historyViewerState: { isEnabled: !1 }
    });
    return jt(() => {
      if (n.value == null)
        throw new Error("vue3-chessboard: Failed to mount board.");
      const s = new Ko(n.value, r, i, o);
      if (o("boardCreated", s), i.reactiveConfig) {
        let a = ge(i.boardConfig);
        Ft(Ue(i.boardConfig), (l) => {
          s.setConfig(ct(a, l)), a = ge(l);
        });
      }
    }), (s, a) => (me(), xe("section", {
      class: at(["main-wrap", {
        disabledBoard: r.promotionDialogState.isEnabled,
        viewingHistory: r.historyViewerState.isEnabled
      }])
    }, [
      De("div", $o, [
        r.promotionDialogState.isEnabled ? (me(), Ut(Zt, {
          key: 0,
          state: r.promotionDialogState,
          onPromotionSelected: a[0] || (a[0] = (l) => r.promotionDialogState = { isEnabled: !1 })
        }, null, 8, ["state"])) : Qt("", !0),
        De("div", {
          ref_key: "boardElement",
          ref: n
        }, null, 512)
      ])
    ], 2));
  }
});
export {
  Ko as BoardApi,
  Wo as TheChessboard
};
