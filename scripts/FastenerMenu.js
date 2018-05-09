function fwLoadMenus() {
    if (window.fw_menu_0) return;
    window.fw_menu_0 = new Menu("root",194,19,"Verdana, Arial, Helvetica, sans-serif",12,"#000000","#ffffff","#66ccff","#000084");
    fw_menu_0.addMenuItem("Masonry Nails","location='MasonryNails.htm'");
    fw_menu_0.addMenuItem("Screw Eyes","location='ScrewEyes.htm'");
    fw_menu_0.addMenuItem("Open Eye Screws/S Hooks","location='OtherItems.htm'");
     fw_menu_0.hideOnMouseOut=true;
    window.fw_menu_1 = new Menu("root",73,19,"Verdana, Arial, Helvetica, sans-serif",12,"#000000","#ffffff","#66ccff","#000084");
    fw_menu_1.addMenuItem("Sleeve","location='SleeveAnchors.htm'");
    fw_menu_1.addMenuItem("Wedge","location='WedgeAnchors.htm'");
     fw_menu_1.hideOnMouseOut=true;
    window.fw_menu_2 = new Menu("root",53,19,"Verdana, Arial, Helvetica, sans-serif",12,"#000000","#ffffff","#66ccff","#000084");
    fw_menu_2.addMenuItem("SAE","location='SAEWashers.htm'");
    fw_menu_2.addMenuItem("USS","location='USSWashers.htm'");
     fw_menu_2.hideOnMouseOut=true;
    window.fw_menu_3 = new Menu("root",129,19,"Verdana, Arial, Helvetica, sans-serif",12,"#000000","#ffffff","#66ccff","#000084");
    fw_menu_3.addMenuItem("Serrated Flange","location='SerratedFlange\.htm'");
    fw_menu_3.addMenuItem("Finished Hex","location='FinishedHex.htm'");
     fw_menu_3.hideOnMouseOut=true;
    window.fw_menu_4 = new Menu("root",145,19,"Verdana, Arial, Helvetica, sans-serif",12,"#000000","#ffffff","#66ccff","#000084");
    fw_menu_4.addMenuItem("Flat Head Carriage","location='FlatheadCarriage.htm'");
    fw_menu_4.addMenuItem("Regular Carriage","location='RegularCarriage.htm'");
    fw_menu_4.addMenuItem("Shortneck Carriage","location='ShortneckCarriage.htm'");
    fw_menu_4.addMenuItem("Hex","location='HexBolts.htm'");
    fw_menu_4.addMenuItem("Track","location='TrackBolts.htm'");
     fw_menu_4.hideOnMouseOut=true;
    window.fw_menu_5 = new Menu("root",196,19,"Verdana, Arial, Helvetica, sans-serif",12,"#000000","#ffffff","#66ccff","#000084");
    fw_menu_5.addMenuItem("High Hat Lag","location='HighHat.htm'");
    fw_menu_5.addMenuItem("Lag (Jamb Lags)","location='LagScrews.htm'");
    fw_menu_5.addMenuItem("Philips Pan Head","location='PanHead.htm'");
    fw_menu_5.addMenuItem("Self Drillers - Non-Serrated","location='NonSerratedDrillers.htm'");
    fw_menu_5.addMenuItem("Self Drillers - Serrated","location='SerratedDrillers.htm'");
    fw_menu_5.addMenuItem("Tapping","location='TappingScrews.htm'");
     fw_menu_5.hideOnMouseOut=true;
  
    fw_menu_5.writeMenus();
  } // fwLoadMenus()
  