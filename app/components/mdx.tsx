import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@components/divider';
import { Table } from '@components/table';
import { Reference } from '@components/reference';
import { rubik } from '@/fonts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import { clsx } from 'clsx';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

type ComponentPropsType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const CustomLink = (props: any) => {
  const { href, ...rest } = props;

  const className = clsx('underline', props.className);

  if (href.startsWith('/')) {
    return <Link className={className} href={href} {...rest} />;
  }

  if (href.startsWith('#')) {
    return <a className={className} {...props} />;
  }

  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

const Code = ({ children, ...props }: ComponentPropsType) => {
  const codeHTML = highlight(children as string);

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
};

const StyledImage = (props: React.ComponentProps<typeof Image>) => {
  props.src;

  return (
    <a href={props.src as string} target="_blank">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        width={props.width ?? 1000}
        height={props.height ?? 600}
        {...props}
        quality={100}
        // layout="responsive"
        className={clsx(
          'rounded',
          'my-5',
          'shadow-sm',
          'w-[auto]',
          'h-[auto]',
          props.className
        )}
      />
    </a>
  );
};

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

const createHeading = (level: number) => {
  const Component = ({ children }: ComponentPropsType) => {
    const slug = slugify(children ? `${children}` : '');
    return React.createElement(
      `h${level}`,
      {
        id: slug,
      },
      [
        React.createElement(
          'a',
          {
            href: `#${slug}`,
            className: clsx('anchor', rubik.className),
            key: 'link' + slug,
          },
          children
        ),
      ]
    );
  };

  Component.displayName = `H${level}`;

  return Component;
};

const components = {
  code: Code,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  Image: StyledImage,
  Table,
  Divider,
  Reference,
};

export const CustomMDX = (props: MDXRemoteProps) => {
  return <MDXRemote {...props} components={{ ...components }} />;
};
