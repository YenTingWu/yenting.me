import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Code } from '@chakra-ui/layout';
import type { CommonAttr } from './mdxType.d';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

export const CodeBlock = (props: CommonAttr) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <Code {...props} />;
};
