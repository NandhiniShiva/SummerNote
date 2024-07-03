import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import { SPComponentLoader } from "@microsoft/sp-loader";
import * as $ from "jquery";

declare global {
  interface Window {
    summernote: any;
  }
}

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  componentDidMount() {
    Promise.all([
      SPComponentLoader.loadScript("https://code.jquery.com/jquery-3.5.1.min.js"),
      SPComponentLoader.loadScript("https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"),
      SPComponentLoader.loadScript("https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"),
      SPComponentLoader.loadCss("https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"),
      SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css")
    ])
    .then(() => {
      if (typeof window['jQuery'] === 'undefined') {
        throw new Error('jQuery is not loaded');
      }
      if (typeof window['jQuery'].fn.summernote === 'undefined') {
        throw new Error('Summernote is not loaded');
      }
      
      // Initialize Summernote once scripts are loaded
      window['jQuery']('.summernote').summernote({
        height: 150,
        codemirror: {
          theme: 'monokai'
        }
      });
    })
    .catch((error) => {
      console.error('Error loading scripts:', error);
    });
  }

  render() {
    return (
      <div className="summernote">summernote 1</div>
    );
  }
}





