import type { AnchorHTMLAttributes, ComponentProps, FC } from "react";

import type { MDXComponents } from "mdx/types";

import { Link } from "fumadocs-core/framework";
import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Banner } from "fumadocs-ui/components/banner";
import { Callout } from "fumadocs-ui/components/callout";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultComponents from "fumadocs-ui/mdx";
const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    TypeTable,
    img: (props) => <ImageZoom {...(props as any)} />,
    blockquote: Callout as unknown as FC<ComponentProps<"blockquote">>,
    a: Link as FC<AnchorHTMLAttributes<HTMLAnchorElement>>,
    File,
    Files,
    Folder,
    Accordion,
    Accordions,
    Step,
    Steps,
    Banner,
    Callout,
    ...TabsComponents,
    ...components,
  };
}
