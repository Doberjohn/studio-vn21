import React from 'react';

export interface IStory extends React.HTMLAttributes<Element> {
   title: string;
   subtitle: string;
   imageUrl: string;
   externalReadLink: string;
   publishDate: Date;
}