import { Component, OnInit } from '@angular/core';
// import { remote } from 'webdriverio';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testapp3';
  ;
  async ngOnInit(){

  //   // let  browser = await remote({
  //   //     capabilities: { browserName: 'chrome' }
  //   // })

  //   // await browser.url('https://www.google.com/')
  //   // await browser.pause(1000);
  //   // await browser.saveScreenshot("FullPage.png");
  //   // await browser.pause(5000); 

    let download_node=document.getElementsByClassName('page')[0] as HTMLElement;
  //   htmlToImage.toJpeg(download_node, { quality:0.9,pixelRatio:4 })
  // .then(function (dataUrl) {

  //   let width=download_node.clientWidth;
  //   let height=download_node.clientHeight;

  //   let PDF = new jsPDF('p', 'px', [width,height],true);
  //     PDF.addPage([width,height])
  //     PDF.setPage(1);
  //     PDF.addImage(dataUrl, 'JPEG', 0, 0, width, height,undefined,'FAST');
      
  //     PDF.addPage([width,height])
  //     PDF.setPage(2);
  //     PDF.addImage(dataUrl, 'JPEG', 0, 0, width, height,undefined,'FAST');
      
  //     PDF.addPage([width,height])
  //     PDF.setPage(3);
  //     PDF.addImage(dataUrl, 'JPEG', 0, 0, width, height,undefined,'FAST');

  //     PDF.save('demo-jpg.pdf');

  //   // var link = document.createElement('a');
  //   // link.download = 'my-image-name-jpeg.jpeg';
  //   // link.href = dataUrl;
  //   // link.click();
  // });

  // htmlToImage.toPng(download_node, { quality: 1,pixelRatio:4 })
  // .then(function (dataUrl) {
    
  //   let width=download_node.clientWidth;
  //   let height=download_node.clientHeight;

  //   let PDF = new jsPDF('p', 'px', [width,height],true);
    
  //   PDF.addPage([width,height])
  //   PDF.setPage(1);
  //   PDF.addImage(dataUrl, 'png', 0, 0, width, height,undefined,'FAST');
    
  //   PDF.addPage([width,height])
  //   PDF.setPage(2);
  //   PDF.addImage(dataUrl, 'png', 0, 0, width, height,undefined,'FAST');
    
  //   PDF.addPage([width,height])
  //   PDF.setPage(3);
  //   PDF.addImage(dataUrl, 'png', 0, 0, width, height,undefined,'FAST');

  //     PDF.save('demo-png.pdf');

  //   // var link = document.createElement('a');
  //   // link.download = 'my-image-name-png.png';
  //   // link.href = dataUrl;
  //   // link.click();
  // });


  const doc = new jsPDF({
    unit: 'px',
    format:  [595, 842]  
  });

  doc.html(download_node, {
    callback: (doc: jsPDF) => {
       
      doc.deletePage(doc.getNumberOfPages());
      doc.save('pdf-export');
    }
  });

  }
}
