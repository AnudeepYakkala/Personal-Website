import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";

import './resume.css';

import ResumePdf from './ResumeUpdated.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends React.Component {
    
    state = {
        numPages: 1,
        pageNumber: 1,
      }
     
      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

      componentDidMount() {
        window.scrollTo(0, 0)
      }
     
      render() {
          
        const { pageNumber, numPages } = this.state;
     
        return (
            <div className="background-color">
                <div className="post">
                    <Document 
                    file={ResumePdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                    <Page pageNumber={pageNumber} width={1000}/>
                    </Document>
                </div>
            </div>
        );
      }
}