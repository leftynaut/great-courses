// on execution, this might be responsible for populating the first 60 results
TgcJsNav_Printer.prototype.addMode('grid', new TgcJsNav_PrintMode(
	'grid',
	'Grid',
	'grid',
	'grid',
	'http://www.thegreatcourses.com/courses/mode/grid',
	60));
	TgcJsNav_Printer.prototype.setMode('grid');


// the TgcJsNav_Pager piece of this seemingly sets the number for additonal
// products to be loaded for each chunk after scrolling
tgcJsNavContainer = new TgcJsNav_ProductContainer(
    tgcJsNavProducts, tgcJsNavProductIdsSorted, 'http://www.thegreatcourses.com/courses',
    new TgcJsNav_Filter(
        tgcProductFilters, tgcJsNavConfigData, 628    ),
    new TgcJsNav_MobilePriceFilter(),
    new TgcJsNav_Sorter('#sort_option_selector'),
    new TgcJsNav_Pager(
        60,
        function() {
            jQuery.ias_resetTrigger();
        }
    ),
    new TgcJsNav_ProductLoader('http://www.thegreatcourses.com/tgc_js_navigation/ajax/getProductsInfo/'),
    new TgcJsNav_Printer(
        {
            list: new TgcJsNav_PrintModeRenderer(tgcListModeTemplate, '#products-list', modeActiveTemplate, modeInactiveTemplate, function(){decorateList('products-list', 'none-recursive');}),
            grid: new TgcJsNav_PrintModeRenderer(tgcGridModeTemplate, '.category-products .category-products-grid', modeActiveTemplate, modeInactiveTemplate, null)
        },
        null,
        new TgcJsNav_CountUpdater([
            {
                headerSelector: '.category-title h1.title-with-counts',
                headerTemplate: topHeaderTemplate
            },
            {
                headerSelector: '.toolbar .amount:not(.mob-amount)',
                headerTemplate: headerTemplate
            },
            {
                headerSelector: '.toolbar .mob-amount',
                headerTemplate: headerTemplateMobile
            },
            {
                headerSelector: '.toolbar-top .mob-amount',
                headerTemplate: headerTemplateMobile
            }
        ])
    ),
    tgcJsNavConfigData
);

tgcJsNavContainer.switchModeByCookie();

// this returns an object -- nothing of value yet
window.utag_data
