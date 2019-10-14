# Digital &amp; Paper FSI
## This version is deprecated -- New Version in Beta RC
## v2018 &amp; Current Feature Set

### Current Development info

---

#### 04-16-18 By: Dominick Ricciardi

**Current stable build 04-16-18**\
Up to 40 digital pages\
Unlimited (non dynamic) pages\
Icons are catagory sectioned\
Custom Icons can be used

##### 1: Automatic Flyer Builder currently in development

##### 2: 2018 Refresh of Design in Alpha and Menu rebuild in development

##### 3: Revising the menu UI to accomidate 30+ pages

---

### Include files

Place at the beginning of document:

```HTML

<link href="FSI-07-12-2018.min.css" rel="stylesheet" type="text/css">
```

Place at the end of document:

```HTML
<script type="text/javascript" src="FSI-03-26-2018.js"></script>
```

## Core system

### Pages written in

id = reference to page\
data2 = what icon will light up when page is displayed

```HTML
 <div class="fsi" id="pg0" data2="Appliances"></div>
 <div class="fsi" id="pg1" data2="Recliners"></div>
 <div class="fsi" id="pg2" data2="Fitness"></div>
```

### Pages var written in

"fo" is where the content for the page goes\
 all content must inside the internalflyer class

```javascript
var content_page0 = '<div class=internalflyer> fo </div>';
var content_page1 = '<div class=internalflyer> fo </div>';
var content_page3 = '<div class=internalflyer> fo </div>';
```

## Menu

```HTML
<div id="submenu">
    <div id="ae4" class="submenu_overflow">

---menu goes here---

   </div>
</div>
```

**Menu icons are pulled from the website CSS and are baked in.**\
**"data"** is the page number that the icon is going to (starting from 0)\
**"i"** class determines icon\
**"undermenu"** text displays text under icon

```HTML
        <div class="submenu_button" data="9">
            <i class="icon-icon_healthBeauty"></i>
            <div class="undermenu">Fitness</div>
        </div>

        <div class="submenu_button" data="10">
            <i class="icon-icon_heater"></i>
            <div class="undermenu">Heaters &amp; Humidifers</div>
        </div>
```

## Icons

`<i class="icon-icon_heater"></i>`

## 2018 Menu icons are now 'product image custom icons'

```HTML
<img src="/images/product/small/S_C1CENTENNIAL.jpg" alt="Vacuums" >
<img src="/images/product/small/S_GL503VD-DB71.jpg" alt="Computers" >
<img src="/images/product/small/S_ME18H704SFS.jpg"  alt="Small Appliances" >
<img src="/images/product/small/S_MK8D2LL-A.jpg"    alt="Apple" >
<img src="/images/product/small/S_YUNTYHBRUS.jpg"   alt="Electronics" >
<img src="/images/product/small/S_301VB.jpg"        alt="Home Audio" >
<img src="/images/product/small/S_UN55MU6290.jpg"   alt="HDTVs" >
<img src="/images/product/small/S_HDA10P-882.jpg"   alt="Home Automation" >
<img src="/images/product/small/S_LFXS24623S.jpg"   alt="Appliances" >
<img src="/images/product/small/S_234-00324.jpg"    alt="Video Games" >
<img src="/images/product/small/S_512270-51Q.jpg"   alt="Mattresses" >
<img src="/images/product/small/S_42342211215.jpg"  alt="Recliners" >
<img src="/images/product/small/S_CP18G30B.jpg"     alt="Air Conditioners" >
<img src="/images/product/small/S_ION16LM.jpg"      alt="Lawn &amp; Garden" >
```

## 2017 Menu icons

Each class displays an icon

```HTML
icon-icon_appliances
icon-icon_bed
icon-caraudio
icon-icon_camera
icon-icon_game
icon-icon_grill
icon-icon_healthBeauty
icon-icon_heater
icon-icon_homeAutomation
icon-icon_headphones
icon-icon_laptop
icon-icon_officeDesk
icon-icon_tv
icon-icon_vacuum
icon-icon_washer
```

Custom Icons

```HTML
<img src="/images/promos/patiofurn4-19-17-1a.jpg" alt="Patio Furniture" width="30" height="30">
<img src="/images/promos/patiofurn4-19-17a.jpg" alt="Patio Furniture Covers" width="30" height="30">
<img src="/images/promos/umbrella4-19-17a.jpg" alt="Umbrellas" width="30" height="30">
```

---

## Digital FSI

### Default element structure

### Full URL or Landing Page

```HTML
<div class="promo_box_940" data="/category/Home-Furnishings/Headboards-Upholstered-Beds/Headboards/_/N-1gl4z5q">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>
```

### Going to Single Model Number

```HTML
<div class="promo_box_940" data="FE140">
    <img src="/images/promos/flyer-12-31-17-pg8-hero1.jpg" alt="Headboards">
</div>
```

### Different Sizes Available for Layout

* .promo_box_940    100% element
* .promo_box_66     66% element
* .promo_box_50     50% element
* .promo_box_33     33% element

.laundry  -- to release from 500px max-height on promo_box_33

```HTML
<div class="promo_box_940"> fo </div>
<div class="promo_box_66"> fo </div>
<div class="promo_box_50"> fo </div>
<div class="promo_box_33"> fo </div>
```

URL added by adding data="foo" atrribute on .promo_box "940,50,33" classed div.

`<div class="promo_box_940" data="/content/PCTECH"></div> or <div class="promo_box_940" data="FE140"></div>`

if data attribute is not used, the child IMG (typical) or child element will not be wrapped in a \
`<a href="{url in data tag or URL to Model #}" title="{model # or url in data tag}"></a>`

-- (This part is automated by the **JS**) and be unclickable.

if only one model number  data="FE140"
\
if multiple model numbers or a Landing Page data="/content/landingpage.html"

(MODEL NUMBER MUST BE IN CAPS)    (ALL "/" AND "." NEED TO BE CONVERT TO "-")
\
**Example** - **CP.PT.003.000** needs to become **CP-PT-0003-000**

### Video Module

```HTML
<video poster="/images/promos/flyer-4-30-17-pg3-hero2.jpg">
<source src="/images/promos/pureWash_Pro-HIW.mp4" type="video/mp4">
Your browser does not support this video
</video>
```

This will show a video on click and will expand to fill the area at 100% on desktop and mobile

### Dynamic Products

Products are brought in via a search link

3 Products across 100%

`<div class="promo_box" data="/browse?Ntt=UN75MU8000+UN75MU9000+UN82MU8000"></div>`

2 Products across 66%  (small) (Two across) \
Requires a 33% element to fill the hole on desktop

`<div class="promo_box showonlytwo" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>`

2 Products across 100% (large) (Two across) Very Large

`<div class="promo_box getlarge" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>`

2 Products across 100% (large) (Two across) Mid Size

`<div class="promo_box getlarge2" data="/browse?Ntt=UN75MU8000+UN75MU9000"></div>`

### Dynamic Graphical element with dynamic pricing
1: `singlepromo`       -- one product with price image on background go to product with link \
2: `singlepromo-multi` -- one product with price image on background go to LINK with data2 attribute \
3: `package`           -- show four products no pricing image on top \
4: `powerpair`         -- show two products no pricing image on top \
5: `lp_package-d `     -- show pricing on package or powerpair

```HTML
<div class="promo_box singlepromo singlepromo-multi videogame" data="FB502SBKL" data2="/browse?Ntt=FB502S*"
style="background-image:url(/images/promos/flyer-12-31-17-pg21-hero18.jpg)">
<div class="promo_des_price"></div>
</div>

<div class="promo_box package" data="/browse?Ntt=wtw5000dw+wed5000dw">
<a href="/browse?Ntt=wtw5000dw+wed5000dw"><img class="package_image_d" src="/images/promos/flyer-3-24-19-pg20-hero2.jpg" alt="Frigidaire Package"></a>
</div>

<div class="promo_box package powerpair lp_package-d" data="/browse?Ntt=wtw5000dw+wed5000dw">
<a href="/browse?Ntt=wtw5000dw+wed5000dw"><img class="package_image_d" src="/images/promos/flyer-3-24-19-pg20-hero2.jpg" alt="Frigidaire Package"></a>
</div>

```

`data` = where the pricing is coming from\
`data2` = used whem there the link needs to go to MORE THEN ONE PRODUCT OR LANDING PAGE\
`style="background-image"` shows the background image for product, logo , etc

**MUST HAVE CLASS**  `.singlepromo-multi` to use **data2**\
If only **ONE** product is being targeted remove `singlepromo-multi` or link will direct to **"UNKNOWN"**

**Classes for alternitive layouts**\
Add class `videogame33`  to end of class string for 33% with no border\
Add class `videogame66`  to end of class string for 66% with no border\
Add class `videogame33b` to end of class string for 33% with border\
Add class `videogame66b` to end of class string for 66% with border

#### Element takes up a 50% slot on desktop and 100% on mobile

#### To make Element 100% with dynamic content

Add class ```dynamic_large``` \
in format  ```promo_box dynamic_large singlepromo videogame```\
block will have a max height of 400px

---

## Paper Flyer

The paper flyer is the digital flyer without all of the dynamic pricing but still retains all the functionality of the digital.
Adding dynamic elements and classes to IMGs used in the Digital version will work the same in the paper one.

**Paper flyers are constructed by Photoshop sliced .html file.**\
From `<table>` to `</table>`\
Removing head,html,Doctype,etc tags\
NO NEED TO REMOVE ANY TABLE ELEMENTS JS removes unnessasry code

`<table id="Table_01" width="1000" height="952" border="0" cellpadding="0" cellspacing="0">`

Each img needs a data tag added

### Full URL

```HTML
<td colspan="2">
<img data="/browse?Ntt=fgss2635tf+fggf3036tf+fgmv176ntf+fgid2466qf"
src="/images/promos/01-14-18-PG2_N_06.jpg" width="513"height="352" alt="">
</td>
```

### Only One Model

```HTML
<td colspan="2">
<img data="FE140" src="/images/promos/01-14-18-PG2_N_06.jpg" width="513"height="352" alt="">
</td>
```

### Adding Mobile creative across 100%

```HTML
 <div class="promo_box_940" data="/help-center/shipping-info">
        <img class="desktop" src=".jpg" alt="FPO">
        <img class="mobile" src="-m.jpg" alt="FPO">
    </div>
```
