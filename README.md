# Digital &amp; Print FSI
## Current version 8
## v2019 &amp; Current Feature Set

### Current Development info

---

#### 10-01-19 By: Dominick Ricciardi

**Current stable build 10-15-19**\
Unlimited pages\
Icons are catagory sectioned\
Custom Icons can be used\
Bottom Promotional Boxes are catagory sectioned

---

### Include files

Place at the beginning of document:

```HTML

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link type="text/css" rel="stylesheet" href="/images/promos/paperflyer-v8-min.css"> 
```

Place at the end of document:

```HTML
<script type="text/Javascript" src="/images/promos/paperflyer-v7.js" ></script> 
```

## MENU

```HTML

  <div class="dconpop"><div class="plist">Product List</div><div class="close_box"><div class="close_box_icon">X</div></div><div class="dconpop_content"><img class="promotional_title_img" src="/images/promos/100logo-d2019.png"><div class="messaging-d">Guaranteed Lowest Prices <span class="right-call-to"><a target="_blank" style="color:#fff" href="/content/low_price_guarantee">View Details &gt; &nbsp;&nbsp;</a></span></div><ul class="product-grid"></ul></div></div><div class="blackout"></div><div class="header2"><div class="progress-container"><div class="progress-bar" id="myBar"></div></div></div>

  <div id="submenu">
                <div id="ae4" class="submenu_overflow">
                
                  <div class="submenu_button" data="0" data_image="/images/promos/appliance_menu_image-2019.png" data_name="Appliances"></div>
                  <div class="submenu_button" data="9" data_image="/images/promos/small_apps_menu_image-2019.png"data_name="Small Appliances"></div>
                  <div class="submenu_button" data="10" data_image="/images/promos/lg-appliance-215x215.jpg" data_name="LG Appliances"></div>
                  <div class="submenu_button" data="13" data_image="/images/promos/LG-OLED-215x215.jpg" data_name="LG TVs"></div>
                  <div class="submenu_button" data="18" data_image="/images/promos/tv_menu_image-2019.png" data_name="Flat Panel TVs"></div>
                  <div class="submenu_button" data="21" data_image="/images/promos/menu-item2019a-11.png"data_name="Smart Home"></div>
                  <div class="submenu_button" data="22" data_image="/images/promos/computers_menu_image-2019.png" data_name="Computers"></div>
                  <div class="submenu_button" data="23" data_image="/images/promos/electronics_menu_image-2019.png"data_name="Electronics"></div>  
                  <div class="submenu_button" data="25" data_image="/images/promos/menu-item2019a-8.png"data_name="Mattresses"></div>
                   <div class="submenu_button" data="27" data_image="/images/promos/home_audio_menu_image-2019.png"data_name="Home Audio"></div>

                </div>
  </div>
```

### MENU BREAKDOWN
```HTML
 <div class="submenu_button" data="0" data_image="/images/promos/appliance_menu_image-2019.png" data_ name="Appliances"></div>
 ```
 data = page #\
 data_image = menu image\
 data_name = catagory defined in bottom boxes and promotions


## PAGES

```HTML
   <div class="fsi_wrapper dragscroll">
            
                  <div class="internal-scroll">
                    <div id="pg0" class="internalflyer"   category="LG"></div> 
                    <div id="pg1" class="internalflyer"   category="LG"></div> 
                    <div id="pg2" class="internalflyer"   category="LG"></div> 
                    <div id="pg3" class="internalflyer"   category="LG"></div> 
                    <div id="pg4" class="internalflyer"   category="LG"></div> 
                    <div id="pg5" class="internalflyer"   category="LG"></div> 
                    <div id="pg6" class="internalflyer"   category="LG"></div> 
                    <div id="pg7" class="internalflyer"   category="LG"></div> 
                </div>

            </div>
```

### PAGE BREAKDOWN
id = page number
class = REQUIRED
category = defines bottom boxes and promotions


  ## BOTTOM PROMOTIONS CATEGORY CONTAINER VARS

```JAVASCRIPT
 var Computers = '';
 var Flat_Panel_TVs = '';
 var Electronics = '';
 var Appliances= '';
 var Home_Audio = '';
 var Portable_Audio = '';
 var Vacuums = '';
 var Vacuums_small = '';
 var Smart_Home = '';
 var Laundry = '';
 var Samsung = '';
 var Recliners = '';
 var Mattresses = '';
 var Small_Appliances = '';
 var LG = ''
```

  ## PAGE SVG CONTAINER VARS

```JAVASCRIPT
var load0 = ''
var load1 = ''
var load2 = ''
var load3 = ''
var load4 = ''
var load5 = ''
var load6 = ''
var load7 = ''
var load8 = ''
var load9 = ''
```