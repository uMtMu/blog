$(function(){
var tableOfContents = $('#table-of-contents');
var entries = $('[id^=outline-container-sec-1-]');
var entry_links = $('#text-table-of-contents ul li ul li');
var y = (a) => console.log(a);

var pagePer = 20;
var pageActive = 0;
var pageCount = Math.ceil(entry_links.length / pagePer);


page_links_html = `<center><br><a class="pagelink" target="0" id="pagePrev"><</a>`
page_links_html += _.map(_.range(0, pageCount), (p) => `<a class="pagelink" target="${p}" id="page-${p}">${p+1}</a>`).join('');
page_links_html += `<a class="pagelink" target="${pageCount-1}" id="pageNext">></a><br><br></center>`

entry_links.parent().prepend('<div id="pageLinks"></div>');
$('#pageLinks').append(page_links_html);
$('#outline-container-sec-1').append(page_links_html);

function pageToggle(pA) {
  start = pA * pagePer;
  end = start + pagePer;
  
if (pA === pageCount-1) {    
    $('#pagePrev').show();
    $('#pageNext').hide();
  } else {
    $('#pagePrev').attr('target', `${parseInt(pA)-1}`);
    $('#pageNext').attr('target', `${parseInt(pA)+1}`);
    
    $('#pagePrev').show();
    $('#pageNext').show();
  }
  
  entry_links.hide();
  entry_links.slice(start, end).toggle();
  entries.hide();
  entries.slice(start, end).toggle();
  pageActive = pA;
}

$(".pagelink").click(function(e) {
  // !!!!!!!!!!!!!!
  pageNumber = $(e.target).attr('target');
  if (pageNumber == parseInt(pageNumber, 10) && pageNumber < pageCount && pageNumber >= 0) {
    pageToggle(pageNumber)
  }
});

tableOfContents.find('h2:first').text('İçindekiler');

pageToggle(0);
});
