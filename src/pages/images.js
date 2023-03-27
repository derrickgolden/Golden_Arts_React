// colored paintings
import couple from "./images/colored/sm_couple_col_comp.jpg" 
import photo1 from "./images/colored/sm_prision_col_comp.jpg" 
import lady from "./images/colored/sm_lady_col_inc.jpg" 
import leopard from "./images/colored/sm_leop_monkey_col.jpg" 
import cheetah from "./images/colored/sm_cheetah_col.jpg" 
import shark from "./images/colored/sm_shark_lady_col.jpg"
import lady1 from "./images/colored/sm_lady1_col.jpg"
import mzungu from "./images/colored/sm_mzungu_family_col.jpg"
import kinoti from "./images/colored/sm_kinoti_wall_col.jpg" 

// gray Drawings
import betty from "./images/gray/sm_Betty-Kyallo_complete.JPG"
import Preschooler_I from "./images/gray/sm_Innocence_complete.JPG"
import lawKid from "./images/gray//sm_Tigeress-Eye_comp.jpg"
import cynthia from "./images/gray/sm_cynthia_comp.jpg"
import daisy from "./images/gray/sm_daisy_comp.jpg"
import winnie from "./images/gray/sm_Black-Beauty_comp.jpg"

// gray paintings
import dadSon from "./images/gray/sm_dad_son_paint_complete.jpg"
import couple1 from "./images/gray/sm_couple_paint_comp.jpg"
import sunFace from "./images/gray/sm_sun_face_paint_comp.jpg"
import qatar from "./images/gray/sm_qatar_paint_comp.jpg"
import nigeriaFamily from "./images/gray/sm_nigeria_family_paint_comp.jpg" 
import SA_Family from "./images/gray/sm_SA_family_paint_comp.jpg"

// Preschooler_I;
import preschooler1 from "./images/Preschooler_I/DSCN0070.JPG"
import preschooler2 from "./images/Preschooler_I/DSCN0088.JPG"
import preschooler3 from "./images/Preschooler_I/DSCN0115.JPG"

// Black Beauty;
import black_beauty1 from "./images/Black_Beauty/IMG_20211218_182433.jpg"
import black_beauty2 from "./images/Black_Beauty/sm_winnie_comp.jpg"

// art
const colPaintingsPortrait = [couple, photo1, lady, leopard, cheetah, shark]
const colPaintingsLandscape = [lady1, mzungu, kinoti]
const grayDrawings = [betty, Preschooler_I, lawKid, cynthia, daisy, winnie]
const grayPaintingsPortrait = [dadSon, couple1, sunFace, qatar]
const grayPaintingsLandscape = [nigeriaFamily, SA_Family]

// art names
const Innocence = [preschooler1, preschooler2, preschooler3, Preschooler_I]
const BlackBeauty = [black_beauty1, black_beauty2];
  
export const art = {coloredPaintings:{colPaintingsPortrait, colPaintingsLandscape}, 
                    grayDrawings, 
                    grayPaintings:{grayPaintingsPortrait, grayPaintingsLandscape}}
export const names ={Innocence, BlackBeauty}