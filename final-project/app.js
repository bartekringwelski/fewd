//work experience information

productTitle = "founder & product"
productDescription = "In 2010, I co-founded an online services marketplace, SkillSlate, which connected service professional with consumers. SkillSlate was backed by some of hte leading investors, including First Round Capital, Cananaan Partners, and a handful of top-tier investors.  <br><br> In 2011, SkillSlate was acquired by TaskRabbit. <img src=assets/skillslate.jpg> <br><br> At TaskRabbit, I was General Manager of Deliveries, leading the product creation of <img src=assets/taskrabbit-deliveries.png>"

vcTitle = "vc & investing"
vcDescription = "At Canaan Partners, I focused on digital media and consumer internet investment. In the three year I worked at the firm, I did all diligence, analysis and vetting of the financing of OpenSky (acquired by Alibaba), GemVara, TremorMedia(IPO in 2012). and Lending Club (IPO in 2014). <br><br> I left Canaan Partners to start SkillSlate, a marketplace for local services. <br><br> I joined LendingClub to start their Business Operations group in 2014, in preperation for the company's IPO and future scaling plans.<img src=assets/canaan.png>"

bizOpsTitle = "biz ops"
bizOpsDescription = "At Lending Club, I founded and currently lead the Business Operations group.  We are focused on department-level strategy and goal setting, project execution, and all related analytics.  Since the Biz Ops team was founded at Lending Club, cost of loan issuance has droppped ~60%. <br><br> At TaskRabbit, I led Operations for a same-day delivery product called 'deliver now', until I transitioned to leading that product line as its General Manager. <img src=assets/taskrabbit.png> <img src=assets/lendingclub.jpeg>"

financeTitle = "finance"
financeDescription = "When I graduated Columbia, I had only taken one finance class. Jumping into investment banking, I gained an expertise valuation and M&A strategy. After two years of investment banking at UBS and Wasserstein, I moved into an Investment Professional  role at Cannan Partners, an early-stage Tech & Healthcare investor where I focused on digital media and consumer investments. <br><br>After that, I started a company called SkillSlate, which was sold to TaskRabbit.   At TaskRabbit, I was head of finance, where I led and executed our $13mm Series C raise. <img src=assets/ubs.png> <img src=assets/taskrabbit.png>"

mbaTitle = "Wharton School, University of Pennsylvania"
mbaDescription = "I earned my MBA from Wharton where I focused in strategy, management and operations."

baTitle = "Columbia College"
baDescription = "I majored in Economics at Columbia College in the City of New York."



// tile and description detectors
$("#work-100px-product").on("click", function() {
	$("#work-title").html(productTitle);
	$("#work-description").html(productDescription);
});


$("#work-100px-vc").on("click", function() {
	$("#work-title").html(vcTitle).html;
	$("#work-description").html(vcDescription).html;
});

$("#work-100px-biz-ops").on("click", function() {
	$("#work-title").html(bizOpsTitle).html;
	$("#work-description").html(bizOpsDescription).html;
});

$("#work-100px-finance").on("click", function() {
	$("#work-title").html(financeTitle).html;
	$("#work-description").html(financeDescription).html;
});

$("#work-100px-mba").on("click", function() {
	$("#work-title").html(mbaTitle).html;
	$("#work-description").html(mbaDescription).html;
});


$("#work-100px-ba").on("click", function() {
	$("#work-title").html(baTitle).html;
	$("#work-description").html(baDescription).html;
});

// smooth scrolling

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    }
});

