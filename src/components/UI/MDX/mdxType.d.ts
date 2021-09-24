import type {
  DetailedHTMLProps,
  HTMLAttributes,
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  BlockquoteHTMLAttributes,
  OlHTMLAttributes,
  LiHTMLAttributes,
} from 'react';

export declare type CommonAttr = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export declare type PAttr = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export declare type AAttr = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export declare type HeadingAttr = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export declare type ImgAttr = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'placeholder'
>;

export declare type BlockquoteAttr = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLElement>,
  HTMLElement
>;

export declare type UlAttr = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export declare type OlAttr = DetailedHTMLProps<
  OlHTMLAttributes<HTMLOListElement>,
  HTMLOListElement
>;

export declare type LiAttr = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
>;

export declare type HrAttr = DetailedHTMLProps<
  HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

export declare type PreAttr = DetailedHTMLProps<
  HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
>;
