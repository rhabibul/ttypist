/**
 * Whenever user changes caret style you need to change border left, right
 * top, bottom accordingly i.e, you need to remove border from all letters for
 * current caret style and border for new caret style which user has chosen
 **/

{ // line caret
	letter.style["border-top"] =  "none";
  letter.style["border-right"] =  "none";
  letter.style["border-bottom"] =  "none";
  letter.style["border-left-style"] = "var(--caret__type)";
  letter.style["border-left-width"] = "var(--caret__width)";
  letter.style["border-left-color"] = "var(--letter__borderLeftColor)";
}

{ // underline caret
	letter.style["border-top"] =  "none";
  letter.style["border-right"] =  "none";
  letter.style["border-bottom"] =  "none";
  letter.style["border-bottom-style"] = "var(--caret__type)";
  letter.style["border-bottom-width"] = "var(--caret__width)";
  letter.style["border-bottom-color"] = "var(--letter__borderLeftColor)";
}

{ // box caret
  letter.style["border"] = "var(--caret__type) 1px var(--letter__borderLeftColor)";
}

{ // block caret (you need to take care about the letter inside the caret when error occurs)
	letter.style['color'] = "#ffffff";
	letter.style['background-color'] = "#000000";
}