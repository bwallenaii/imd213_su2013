// JavaScript Document

var ContentRotator = new Class({
	
	Implements: [Options, Events],
	
	options:{
		fixContainerHeight: true,
		navContSelect: ".navigation",
		navItemSelect: "a",
		contContSelect: ".content",
		contItemSelect: "div",
		selectedClass: "selected"
	},

	initialize: function(element, options)
	{
		this.element = document.id(element);
		this.setOptions(options);
		//Select the items inside main element that we need.
		this.selectionItems = this.element.getElement(this.options.navContSelect).getChildren(this.options.navItemSelect); //chained selection
		this.contentContainer = this.element.getElement(this.options.contContSelect); //partial selection
		this.contentItems = this.contentContainer.getChildren(this.options.contItemSelect); //partial selection part 2
		
		//set up listeners and related functions
		this.selectionItems.addEvent("click", this.navClicked.bind(this));
		
		//content height fixer. . .
		if(this.options.fixContainerHeight)
		{
			var largestHeight = 0;
			for(var i = 0; i < this.contentItems.length;++i)
			{
				if(largestHeight < this.contentItems[i].getSize().y)
				{
					largestHeight = this.contentItems[i].getSize().y;
				}
			}
			
			this.contentContainer.setStyle("height", largestHeight);
		}
		//this.navClicked({target:this.selectionItems[0]});
		this.selectionItems[0].fireEvent("click", this.selectionItems[0]);
	},
	
	navClicked: function(e){
		e && e.stop ? e.stop():null;
		var targetIndex = 0;
		
		for(var i = 0; i < this.selectionItems.length;++i)
		{
			if(this.selectionItems[i] == e.target)
			{
				targetIndex = i;
				break; //stop looking!
			}
		}
		this.contentItems.fade("out");
		this.selectionItems.removeClass(this.options.selectedClass);
		this.contentItems[targetIndex].fade("in");
		this.selectionItems[targetIndex].addClass(this.options.selectedClass);
		
		return false; //ie 6. . . yeeesh.
	}
});