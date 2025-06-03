import React from 'react';
import { BlockTypes } from '@storyblok/react';

export const resolvers = {
  [BlockTypes.UL_LIST]: (node: any) => (
    <ul className="my-4 list-disc pl-6">
      {node.children?.map((child: any, idx: number) =>
        React.cloneElement(child, { key: child.key ?? idx })
      )}
    </ul>
  ),
  [BlockTypes.HEADING]: (node: any) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold">{node.children}</h2>
  ),
  [BlockTypes.OL_LIST]: (node: any) => (
    <ol className="my-4 list-decimal pl-6">
      {node.children?.map((child: any, idx: number) =>
        React.cloneElement(child, { key: child.key ?? idx })
      )}
    </ol>
  ),
  [BlockTypes.LIST_ITEM]: (node: any) => (
    <li className="mb-2">{node.children}</li>
  ),
};
