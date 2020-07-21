let sidemenuItems = [{"item": "HOME", "link": "home.html"},
{"item":"CURRENT ASSESSMENTS", "link":"currentassessments.html"},
{"item":"ADMINISTRATIVE UNITS", "link":"#", 
   "subItems":[{"item":"Sponsored Programs Administration", "link":"sponsoredprograms.html"},
               {"item":"RF-SUNY Human Resources", "link":"#"},
               {"item":"Office for Regulatory and Research Compliance", "link":"#"},
               {"item":"Innovation Development and Commercialization", "link":"#"},
               {"item":"Community & Economic Development", "link":"#"},
               {"item":"Office of Strategic Initiatives, Data, Assessment and Technology", "link":"#"}]},
{"item":"GOALS & BENEFITS", "link":"goalsandbenifits.html"}]

let addsidemenu = function(page){
    let sidemenu = document.getElementById('navigation-bar');

    for(let i = 0; i < sidemenuItems.length; i++){
        let item = sidemenuItems[i];
        var addsubmenu = false;
        if(item.hasOwnProperty('subItems')){
            let subitems = item.subItems;
            subitems.forEach(element => {
                if(element.item == page)
                {
                    addsubmenu = true;
                    return;
                }
            });
        }
        if( addsubmenu == false)
        {
            let link = '';
            if(item.hasOwnProperty('subItems'))
            {
                link = item.subItems[0].link;
            } 
            else
            {
                link = item.link;
            }

            let menuItem = document.createElement("li");
            let menuItemContent = '<a href="' + link + '">'+ item.item +'</a>'; 
            menuItem.innerHTML = menuItemContent;
            menuItem.classList.add('navigation-items');
            menuItem.classList.add('hover-highlight');
            if(page == item.item)
            {
                menuItem.setAttribute("id", "active-page");
            }
            sidemenu.appendChild(menuItem);
        }
        else
        {
            let subitems = item.subItems;
            let submenu = '<ul id="sub-navigation-bar">';
            for(var j = 0; j< subitems.length; j++)
            {
                if(j == 0)
                {
                    submenu +='<li class="first-sub-navigation-item hover-highlight"';
                    if(page == subitems[j].item)
                    {
                        submenu += ' id = "active-page"';
                    }
                    submenu += '><a href="'+ subitems[j].link +'">'+ subitems[j].item +'</a></li>';
                }
                else if(j == subitems.length-1)
                {
                    submenu +='<li class="last-sub-navigation-item hover-highlight"';
                    if(page == subitems[j].item)
                    {
                        submenu += ' id = "active-page"';
                    }
                    submenu += '><a href="'+ subitems[j].link +'">'+ subitems[j].item +'</a></li>';
                }
                else
                {
                    submenu +='<li class="sub-navigation-items hover-highlight"';
                    if(page == subitems[j].item)
                    {
                        submenu += ' id = "active-page"';
                    }
                    submenu += '><a href="'+ subitems[j].link +'">'+ subitems[j].item +'</a></li>';
                }
            }
            let menuItem = document.createElement("li");
            let menuItemContent = '<a href="' + subitems[0].link + '">'+ item.item +'</a>' + submenu; 
            menuItem.innerHTML = menuItemContent;
            menuItem.setAttribute("id", "expanded-navigation-item");
            sidemenu.appendChild(menuItem);
        }
    }
}

let generateAccordionElem = function(level, collapseId, headerId, parentId, childId, header, accordionContent){
    var headerno = level + 2;
    let accordionElem =  '<div class = "card"><div class="card-header level'+ level +'" id="'+ headerId + '">' +
                          '<button class="btn btn-link" data-toggle="collapse" data-target="#'+ collapseId + '" aria-expanded="false" aria-controls="' + collapseId + '">'+
                            '<h'+ headerno +' class = "content-header-no-margin">' + header + '<i class="fas fa-chevron-down"></i></h'+ headerno +'></button></div>'
                        + '<div id="'+ collapseId + '" class = "collapse" aria-labelledby= "'+ headerId + '" data-parent="#'+ parentId +'"> <div class = "card-body" id="'+ childId +'">'
                        + accordionContent +'</div></div></div>';  
    return accordionElem;
}