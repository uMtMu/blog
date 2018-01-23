$(function(){
    var tableOfContents = $('#table-of-contents');
    var entries = $('#text-table-of-contents ul li ul li');
    var y = (a) => console.log(a);

    var pagePer = 20;
    var pageActive = 0;
    var pageCount = Math.ceil(entries.length / pagePer);

    entries.parent().prepend('<div id="pageLinks"></div>');
    var pageLinks = $('#pageLinks');

    pageLinks.append(` <a class="pagelink" target="0" id="pagePrev"><</a> `);
    pageLinks.append(_.map(_.range(0, pageCount), (p) => ` <a class="pagelink" target="${p}" id="page-${p}">${p+1}</a> `));
    pageLinks.append(` <a class="pagelink" target="${pageCount-1}" id="pageNext">></a> `);

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
