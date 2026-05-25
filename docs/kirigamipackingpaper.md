

# Computational Design and Engineering of Expandable Kirigami Packing Materials

## Structural Mechanics of Expandable Paper Materials

The physical transformation of flat sheet materials into high-volume, shock-absorbing protective packaging relies on the geometric principles of Tension-Activated Kirigami (TAK). While traditional folding methodologies—such as origami—redistribute surface area without material modification, kirigami utilizes strategic cutting patterns to program localized, out-of-plane buckling and rigid-unit rotation. The primary geometric configuration utilized in expandable packaging is the staggered parallel slit pattern. In its planar, un-deformed state, the material is patterned with parallel rows of linear cuts arranged in alternating columns. When a tensile force is applied perpendicular to the orientation of the cuts, the mechanical constraints of the uncut material—referred to as ligaments or hinges—force these segments to rotate and buckle out of the two-dimensional plane.

This out-of-plane deformation transforms the highly dense, flat sheet into a porous, three-dimensional meso-architecture composed of inclined plate-like elements. This transformation yields an apparent negative Poisson's ratio, classified as auxetic behavior. Unlike conventional materials that contract laterally when stretched, auxetic kirigami structures undergo coordinated cell rotation that allows them to expand both longitudinally and transversely.

The resulting expanded geometry behaves as a spatial network of individual hexagonal columns that distribute stress uniformly across the entire load-bearing matrix. This structural configuration allows the expanded paper to absorb up to 80% of kinetic impact energy during transit while reducing overall packaging weight by up to 70% compared to equivalent solid wood-based or dense molded protective packaging. Additionally, because the material remains in its flat, high-density form until deployment, it minimizes storage space and transport volume, translating to lower freight costs and a reduced carbon footprint.

The kinematic transition of a staggered slit unit cell under a vertical tensile extension $\delta$ can be mathematically modeled to predict the mechanical behavior of the material. The key dimensional parameters governing this behavior include the vertical slit length ($H$), the transverse spacing or ligament width between adjacent cuts ($L$), the vertical hinge width ($W$), and the vertical gap spacing between duplicate cuts in multi-slit arrays ($R$).

As the unit cell is extended along the tension axis from its initial height of $H+R$, it experiences an axial strain ($\epsilon_{ax}$), which is defined as:

$$\epsilon_{ax}(\delta) = \frac{\delta}{H + R}$$

By modeling the internal stress pathways—referred to as tension lines—as constant-length ligaments that remain straight between the terminal ends of adjacent slits, the transverse contraction strain ($\epsilon_{tran}$) is approximated by:

$$\epsilon_{tran}(\delta) = \frac{\sqrt{H^2 + L^2 - (H + \delta)^2} - L}{W + L}$$

The volumetric expansion ratio ($R_{exp}$), representing the ratio of the deployed three-dimensional footprint to the original flat surface area, can be calculated as:

$$R_{exp}(\delta) = \left( \frac{W + \sqrt{H^2 + L^2 - (H + \delta)^2}}{W + L} \right) \left( \frac{H + R + \delta}{H + R} \right)$$

To prevent mechanical failure, the maximum limit of extension before catastrophic material tearing ($\delta_{max}$) occurs when the internal tension lines align fully parallel with the tension axis, which is expressed as:

$$\delta_{max} = \sqrt{H^2 + L^2} - H$$

This physical boundary yields a maximum theoretical axial strain of:

$$\epsilon_{ax,max} = \frac{\sqrt{H^2 + L^2} - H}{H + R}$$

---

## Mechanics of Bidirectional 2D Auxetics (Rotating Rigid Units)

To achieve true isotropic, bidirectional expansion where the material expands along both axes simultaneously under tension, designers must transition from parallel slits to periodic arrays of rotating rigid units. This class of structural metamaterials exhibits a negative Poisson's ratio ($\nu<0$) in all planar directions, circumventing the lateral contraction typical of traditional staggered slit geometries.

The fundamental mechanism of 2D bidirectional auxetics is the coordinated, in-plane rotation of rigid polygonal tiles—commonly squares or equilateral triangles—connected at their vertices by small, flexible ligaments or "living hinges".`
Contracted State (Closed):          Expanded State (Rotated Open):
     ┌───┐┌───┐                            ┌───┐
     │ 1 ││ 2 │                            │ 1 │  ➔
     └───┘└───┘                      ┌───┐ └───┘
     ┌───┐┌───┐                      │ 2 │
     │ 3 ││ 4 │                      └───┘ ┌───┐
     └───┘└───┘                       ➔    │ 3 │
                                           └───┘`

When a tensile load is applied along either the longitudinal or transverse axis, the pulling force exerts a moment on the rigid tiles, forcing them to rotate concurrently in alternating directions (clockwise and counterclockwise). This rotation opens up symmetric, polygonal voids (such as squares or hexagons) between the tiles, resulting in a dramatic expansion of the global surface area.

For an idealized rotating square network with tile side length $l$ and connection hinges of negligible width, the Poisson's ratio ($\nu$) is mathematically defined by the ratio of transverse strain ($\epsilon_x$) to longitudinal strain ($\epsilon_y$):

$$\nu = -\frac{\epsilon_x}{\epsilon_y}$$

During the entire rotational transition, the Poisson's ratio remains strictly negative and approaches a perfect isotropic value of:

$$\nu = -1$$

This kinematic behavior provides excellent shear resistance, high indentation toughness, and adaptive permeability, making bidirectional 2D auxetics highly effective for body-conforming interfaces, medical devices, and premium impact-absorbing packaging.

---

## Mechanics of 3D Pop-Up and Ori-Kirigami Structures

While 2D auxetics deform purely in-plane when fabricated from thick, rigid materials, thin-sheet variants undergo a dramatic out-of-plane physical transformation due to localized elastic instabilities. Under uniaxial or biaxial tension, the tiny connecting hinges experience extreme stress concentrations. To release this energy, the ligaments undergo out-of-plane buckling, forcing the flat, perforated sheet to self-deploy into a three-dimensional, corrugated pop-up structure resembling a Miura-ori fold.`
Thin-Sheet Buckling (Pop-Up):       Ori-Kirigami (Creased Ligaments):
        ▲   ▲  (Buckles Up)                 /\   /\   (Mountain)
     ┌───┐ ┌───┐                         ┌───┐ ┌───┐
     │   │ │   │                         │   │ │   │
     └───┘ └───┘                         └───┘ └───┘
        ▼   ▼  (Buckles Down)               \/   \/   (Valley)`

To control this buckling behavior and prevent chaotic twisting, designers utilize **Ori-Kirigami**—a hybrid methodology that integrates programmed crease lines directly onto the rotating units or their connecting ligaments. Adding crease lines (folding geometry) to the cutting patterns yields a highly predictable, one-degree-of-freedom (1-DOF) rigid origami mechanism.

The transition is governed by several design parameters, including the orientation angle of the added creases ($\gamma$) and the relative connection size ($s$):

$$s = \frac{2h + w}{2L}$$

where $L$ is the dimension of the main tile, $h$ is the height of the connection ligament, and $w$ is the width of the connection.

By scoring mountain folds (folding "up" toward the user) and valley folds (folding "down") along the diagonals of the tiles or the connection ligaments, the structure is kinematically equivalent to a degree-4 single-vertex rigid origami unit. When stretched, the tiles fold out of the plane along these pre-scored creases.

This mathematical coupling of in-plane rotation and out-of-plane folding allows the material to self-fold into complex, load-bearing 3D shells or compact accordion-style geometries without material tearing or joint failure.

---

## Comparative Taxonomy of Honeycomb Packaging Systems

The industrial application of honeycomb paper structures encompasses multiple distinct formats, each engineered for specific structural demands and transit environments. Understanding the distinctions between these formats is necessary for optimizing material selection and performance.

| Packaging Format | Base Material Weight (GSM) | Manufacturing Method | Primary Mechanical Function | Typical Industrial Applications |
| --- | --- | --- | --- | --- |
| **Flexible Honeycomb Wrap Rolls** | 70 – 90 GSM Kraft Paper | Direct rotary die-cutting of staggered parallel slits. | Low-cost, conformable surface protection and lightweight void fill. | E-commerce shipping, fragile retail goods, books, and glassware. |
| **Rigid Honeycomb Panels & Boards** (EXCLUDED - Requires Gluing) | 80 – 150 GSM (facings); 80 – 120 GSM (core) | Bonding expanded accordion cores between rigid flat liner sheets. | High compressive strength and structural load-bearing capacity. | White goods, heavy electronics, automotive parts, and pallet replacements. |
| **Layered Accordion Honeycomb Cores** (EXCLUDED - Requires Gluing) | 60 – 100 GSM Craft Paper | Stacked identical sheets bonded with alternating parallel adhesive lines. | Elastic expansion and flexible 3D shape configuration. | Interior furniture filler, lightweight door cores, and custom 3D displays. |
| **Rotating Square Auxetic Sheets (2D/3D)** | 120 – 220 GSM Cardstock or PET | Perforating orthogonal slits with optional scoring. | Isotropic bidirectional expansion and bistable energy absorption. | Wearable knee braces, shock-absorbing electronics cases, and transformable sunshades. |

For rigid protective panels, specialized cutting and scoring techniques are applied to modify the structural behavior of the sandwich structure. The primary processing techniques include:

* **Reverse Slit Score / Slit Score:** Formed by cutting through one outer facing paper and the interior core while leaving the opposite facing intact. This creates a high-strength folding hinge or a fan-folding panel layout.
* **Cookie-Cut Honeycomb:** Produced by executing precise cuts through both outer facings and a partial depth of the core, leaving the panel held together solely by the uncut center core. This allows the components to remain stacked for transport and easily separated during assembly.
* **Pressure Sensitive Adhesive (PSA) Panels:** Constructed by applying a high-tack adhesive layer protected by a release liner to one face of the panel. This enables rapid integration as block supports inside shipping cartons.

---

## Taxonomic Variations in Cut Geometry

The mechanical properties of tension-activated kirigami can be customized by modifying the geometry of the cuts. Moving beyond the standard single-slit pattern allows designers to optimize parameters like tear resistance, structural stability, and layer-to-layer cohesion.`
Single-Slit Pattern:
  ---   ---   ---   ---
---   ---   ---   ---
  ---   ---   ---   ---

Double-Slit Pattern (Multi-Slit):
  ===   ===   ===   ===
===   ===   ===   ===
  ===   ===   ===   ===

Rotating Square Auxetic (2D/3D Bidirectional):
  ┌─┐ ┌─┐ ┌─┐ ┌─┐
  └─┘ └─┘ └─┘ └─┘
  ┌─┐ ┌─┐ ┌─┐ ┌─┐
  └─┘ └─┘ └─┘ └─┘`

### Single-Slit Tension-Activated Kirigami

The classical single-slit pattern consists of uniform linear cuts arranged in an offset grid. While highly efficient to cut, this pattern concentrates stress at the terminal ends of each slit. This stress concentration makes the material prone to tear propagation when fully deployed, limiting its use with lower-grade or recycled paper fibers. Additionally, when wrapped around objects, single-slit patterns exhibit weak layer-to-layer mechanical interlocking, which can cause the wrap to unspool unless secured with adhesive tape.

### Multi-Slit Configurations

The multi-slit pattern replaces each single vertical cut with duplicate, closely spaced parallel slits separated by a small gap ($R$) along the tension axis. The most common configuration is the double-slit pattern, though triple and quadruple-slit arrays are also utilized. This design decouples the active deformation zones of adjacent rows, allowing the material to form undulating ribbons that twist out of the plane of the sheet. These undulating ribbons create loops that mechanically interlock with adjacent wrap layers, preventing the wrapped packaging from unspooling without the need for adhesive tape.

### Multi-Beam Structural Enhancements

To prevent premature tearing at the high-stress regions of the hinge zones, the multi-beam enhancement adds auxiliary perpendicular or curved cuts to the ends of the primary slits. This configuration redistributes the tensile forces across multiple parallel load-bearing columns rather than concentrating them at a single point. By reducing the local stress intensity factor, this design allows the kirigami structure to withstand higher tensile forces and achieve greater deployment volumes without mechanical failure.

### Rotating Square Auxetic Geometry

The rotating square pattern utilizes mutually orthogonal slits cut in a grid, isolating solid tiles of material. Unlike parallel cuts, this design leaves only the diagonal corners of adjacent tiles connected. Under tensile stress, the tiles rotate in-plane (creating a 2D auxetic effect) or buckle along scored diagonals (creating a 3D pop-up origami surface).

---

## Alternative Accordion Honeycomb Layering

> [!WARNING]
> This method is **EXCLUDED** from the computational cutfile generator. The generator only supports single-sheet, tension-activated designs that do not require gluing multiple sheets of paper together.

The term "honeycomb paper" is also used to describe a distinct construction method involving layered paper stacks bonded with alternating glue lines. This accordion-style technique is used to manufacture structural panels and three-dimensional, fan-like objects.`
Layering and Gluing Sequence:

Sheet n+2:  =============================== (Apply center glue line)
                  |                 |
Sheet n+1:  =============================== (Apply offset edge glue lines)
             |                 |                 |
Sheet n:    =============================== (Apply center glue line)`

To fabricate an accordion honeycomb structure, multiple identical silhouette shapes are cut from flat sheets. Each shape is folded in half along its vertical axis to define a clear spine. The assembly process alternates the placement of the adhesive lines between layers:

* **Primary Adhesive Pass (Center Line):** The first folded sheet is opened, and a single vertical line of glue is applied down the center crease, securing the left and right halves of the sheet together.
* **Secondary Adhesive Pass (Edge Lines):** The next folded sheet is stacked on top, and two parallel lines of glue are applied on the outer faces, positioned at the 1/4 and 3/4 marks relative to the spine.

This alternating adhesive pattern (Center Line $\rightarrow$ Edge Lines $\rightarrow$ Center Line $\rightarrow$ Edge Lines) is repeated throughout the stack. The total number of layers required to form a complete 360-degree rotational structure is determined by the paper weight and the horizontal width of the shape. Lightweight copy paper (60–75 GSM) requires approximately 18 to 26 layers, whereas heavier cardstock (176 GSM) requires 40 to 60 layers to minimize the spring-back force and prevent joint failure.

Using highly rigid cardstock can make it difficult to join the ends of the assembly. The choice of adhesive is also critical; standard rigid glues can snap under the peeling stresses of deployment, so flexible, fast-drying adhesives like Polyvinyl Acetate (PVA) are preferred to allow the joints to flex during expansion.

---

## Programmatic and Vector Generation Workflows

Generating cut files for a digital plotter requires precise, clean vectors. When using desktop cutting machines, importing hundreds of individual, disconnected line elements can cause the software to crash, introduce path-ordering inefficiencies, and result in severe paper tearing due to multiple blade starts. The optimal solution is to programmatically compile the entire staggered slit matrix into a single unified compound path (`<path d="..." />`) using an automated JavaScript generator.

### Production-Ready JavaScript SVG Generator (1D and 2D/3D Auxetic)

The following object-oriented ES6 JavaScript class generates an optimized SVG file directly from the browser or a Node.js runtime. It supports both the classic anisotropic **1D Staggered Slit Pattern** and the isotropic **2D/3D Rotating Square Auxetic Pattern**.

For the 3D pop-up variant, the generator outputs a separate, color-coded compound path layer for diagonal score/crease lines, ensuring proper digital fabrication alignment.`javascript
class KirigamiSVGGenerator {
  /**
   * @param {Object} config - Configuration parameters (all physical sizes in mm)
   * @param {number} config.canvasWidth - Total width of paper sheet (W_c)
   * @param {number} config.canvasHeight - Total height of paper sheet (H_c)
   * @param {number} config.margin - Border safety margin where no cuts occur (B_d)
   * @param {string} config.patternType - "1D-staggered" or "2D-auxetic-squares"
   *
   * // 1D Staggered Cut parameters:
   * @param {number} config.slitLength - Vertical cut length (H)
   * @param {number} config.gap - Vertical uncut spacing between collinear cuts (R)
   * @param {number} config.colSpacing - Horizontal spacing between cut columns (L)
   *
   * // 2D/3D Rotating Square Auxetic parameters:
   * @param {number} config.tileSize - Side length of rotating squares (S)
   * @param {number} config.hingeGap - Corner gap width between adjacent tiles (g)
   * @param {boolean} config.generateCreases - Generate diagonal score lines for 3D pop-up
   */
  constructor(config = {}) {
    this.canvasWidth = config.canvasWidth || 280;
    this.canvasHeight = config.canvasHeight || 280;
    this.margin = config.margin || 15;
    this.patternType = config.patternType || "2D-auxetic-squares";

    // 1D Staggered Slit Parameters
    this.slitLength = config.slitLength || 20;
    this.gap = config.gap || 4;
    this.colSpacing = config.colSpacing || 5;

    // 2D/3D Auxetic Parameters
    this.tileSize = config.tileSize || 15;
    this.hingeGap = config.hingeGap || 3;
    this.generateCreases = config.generateCreases!== false;
  }

  /**
   * Generates the optimized SVG string containing single compound paths for cuts and scores
   * @returns {string} Fully structured, valid SVG XML markup
   */
  generateSVGString() {
    let cutPathCommands =;
    let creasePathCommands =;

    if (this.patternType === "1D-staggered") {
      const stepY = this.slitLength + this.gap;
      const halfStepY = stepY / 2;
      let colIndex = 0;

      for (let x = this.margin; x <= this.canvasWidth - this.margin; x += this.colSpacing) {
        const staggerShift = (colIndex % 2) * halfStepY;
        let y = this.margin + staggerShift;
        while (y + this.slitLength <= this.canvasHeight - this.margin) {
          cutPathCommands.push(`M ${x.toFixed(3)},${y.toFixed(3)} v ${this.slitLength.toFixed(3)}`);
          y += stepY;
        }
        colIndex++;
      }
    } else if (this.patternType === "2D-auxetic-squares") {
      const pitch = this.tileSize + this.hingeGap;

      for (let x = this.margin; x + pitch <= this.canvasWidth - this.margin; x += pitch) {
        for (let y = this.margin; y + pitch <= this.canvasHeight - this.margin; y += pitch) {
          const xStart = x + this.hingeGap / 2;
          const xEnd = xStart + this.tileSize;
          const yStart = y + this.hingeGap / 2;
          const yEnd = yStart + this.tileSize;

          // Horizontal cuts (Top & Bottom of rotating tile)
          cutPathCommands.push(`M ${xStart.toFixed(3)},${yStart.toFixed(3)} h ${this.tileSize.toFixed(3)}`);
          cutPathCommands.push(`M ${xStart.toFixed(3)},${yEnd.toFixed(3)} h ${this.tileSize.toFixed(3)}`);

          // Vertical cuts (Left & Right of rotating tile)
          cutPathCommands.push(`M ${xStart.toFixed(3)},${yStart.toFixed(3)} v ${this.tileSize.toFixed(3)}`);
          cutPathCommands.push(`M ${xEnd.toFixed(3)},${yStart.toFixed(3)} v ${this.tileSize.toFixed(3)}`);

          // Add diagonal score lines for 3D Pop-Up transformation
          if (this.generateCreases) {
            creasePathCommands.push(`M ${xStart.toFixed(3)},${yStart.toFixed(3)} L ${xEnd.toFixed(3)},${yEnd.toFixed(3)}`);
            creasePathCommands.push(`M ${xEnd.toFixed(3)},${yStart.toFixed(3)} L ${xStart.toFixed(3)},${yEnd.toFixed(3)}`);
          }
        }
      }
    }

    const cutCompoundPath = cutPathCommands.join(" ");
    const creaseCompoundPath = creasePathCommands.join(" ");

    let scoreLayer = "";
    if (this.generateCreases && creasePathCommands.length > 0) {
      // Blue lines represent creases (to be assigned as Score in cutting software)
      scoreLayer = `\n  <path d="${creaseCompoundPath}" fill="none" stroke="#0000FF" stroke-width="0.1" stroke-dasharray="1,1" />`;
    }

    return `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="${this.canvasWidth}mm" height="${this.canvasHeight}mm"
     viewBox="0 0 ${this.canvasWidth} ${this.canvasHeight}">
  <rect x="0" y="0" width="${this.canvasWidth}" height="${this.canvasHeight}"
        fill="none" stroke="#CCCCCC" stroke-width="0.5" />
  <path d="${cutCompoundPath}" fill="none" stroke="#FF0000" stroke-width="0.1" stroke-linecap="round" />${scoreLayer}
</svg>`;
  }

  /**
   * Client-Side UI trigger to download the file directly from a browser context
   * @param {string} filename - Custom name for the exported SVG file
   */
  triggerDownload(filename = "kirigami_pattern.svg") {
    const svgContent = this.generateSVGString();
    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const blobURL = URL.createObjectURL(blob);

    const hiddenAnchor = document.createElement("a");
    hiddenAnchor.href = blobURL;
    hiddenAnchor.download = filename;
    document.body.appendChild(hiddenAnchor);
    hiddenAnchor.click();

    document.body.removeChild(hiddenAnchor);
    URL.revokeObjectURL(blobURL);
  }
}`

---

## Digital Fabrication and Optimization on Desktop Plotters

Converting an SVG cut file into physical packaging on a desktop plotter requires precise software configuration and hardware calibration. Standard presets can lead to tearing or incomplete cuts when processing dense slit arrays on lightweight paper.

### Software Configuration in Cricut Design Space

When importing custom SVG files into Cricut Design Space, several specific adjustments must be applied:

1. **Verify Scale Accuracy:** Ensure the imported SVG matches the intended design dimensions, as Design Space can sometimes alter file dimensions during import.
2. **Define Operation Type (Cut vs. Score Layers):**
* The SVG generator outputs cut lines in **Red** and score/crease lines in **Blue**.
* Once imported, ungroup the layers. Select the blue vector layer (creases) in the Layers Panel, navigate to the **Operation** menu in the top toolbar, and set it to **Score**.
* Select the red vector layer (cuts), and ensure the operation is set to **Basic Cut**.


3. **Apply the Attach Command:** Select both the Cut layer, the Score layer, and the outer boundary square, then click **Attach** at the bottom of the Layers Panel. This locks the spatial coordinates of the folds and cuts relative to each other, preventing Cricut from scrambling the pattern on the cutting mat.

### Hardware Calibration and Cutting Parameters

The high density of cuts in expandable patterns leaves very small uncut ligaments, making the paper highly susceptible to tearing during fabrication if excessive cutting force is applied. The machine settings must be calibrated according to the weight and composition of the paper.

| Paper Type & Weight | Recommended Cricut Preset | Cut Pressure (Grams of Force) | Multi-Cut Setting | Cutting Mat Selection | Blade Type |
| --- | --- | --- | --- | --- | --- |
| **Lightweight Kraft Wrapping Paper (70–90 GSM)**

 | Washi Sheet

 | 85 g

 | Off (Single Pass)

 | Blue LightGrip Mat

 | Premium Fine-Point

 |
| **Medium Kraft Paper (90–120 GSM)**

 | Copy Paper - 20 lb

 | 113–126 g

 | Off (Single Pass)

 | Blue LightGrip Mat

 | Premium Fine-Point

 |
| **Lightweight Cardstock (65 lb / 176 GSM)**

 | Light Cardstock - 65 lb

 | 238 g

 | Off (Single Pass)

 | Blue LightGrip Mat

 | Premium Fine-Point

 |
| **Intricate Cardstock (80 lb / 216 GSM)**

 | Cardstock (for intricate cuts)

 | 182 g

 | 2x (Double Pass)

 | Green StandardGrip Mat

 | Premium Fine-Point

 |
| **Heavy-Duty Structural Cardstock (100 lb+ / 270 GSM+)**

 | Heavy Cardstock (Modified)

 | 282–300 g

 | 2x (Double Pass)

 | Green StandardGrip Mat

 | Premium Fine-Point

 |

### Quality Control and Process Troubleshooting

To achieve consistent results and prevent material failure during fabrication, several environmental and mechanical variables must be controlled:

* **Environmental Moisture Control:** Cellulose fibers are highly hygroscopic, and their mechanical properties change with environmental humidity. The optimal humidity range for cutting paper is 40% to 55%. If the environment is too dry, the paper becomes brittle, leading to fracture along the hinge zones. Conversely, if the environment is too damp, the paper absorbs moisture, causing the blade to drag and tear the damp fibers.
* **Blade Maintenance:** Paper fibers and adhesive residue can accumulate around the blade tip, preventing it from rotating freely. Clean the blade tip regularly using isopropyl alcohol to remove residue. If tearing occurs on clean, dry paper, replace the blade.
* **De-Matting Technique:** Peeling the cut paper upward off the cutting mat can cause curling and distort the delicate cuts. To prevent this, place the mat face-down on a clean surface. Gently peel the flexible plastic mat away from the paper backing while keeping the paper flat. This technique minimizes material stress and ensures the paper remains flat prior to deployment.

---

## Conclusions

Single-sheet staggered slit patterns and auxetic structures offer functional, sustainable solutions for protective packaging. Standard single-slit patterns provide highly efficient, conformable wrapping with simple linear cuts, making them ideal for high-volume, on-demand void fill. For demanding applications, multi-slit and multi-beam variations reduce stress concentrations and provide a mechanical interlock that holds its shape without tape.

For isotropic, bidirectional applications, rotating square auxetic geometries provide an exceptional alternative. By coupling in-plane rotation with scored diagonal fold lines, Ori-Kirigami designs expand simultaneously along both principal axes and self-fold into robust, shock-absorbing 3D pop-up textures.

Digital fabrication on desktop plotters is highly feasible if the vector path coordinates are properly managed. Parametric coordinate generation via client-side JavaScript libraries and standalone generators prevents layout errors and software lag by exporting clean, consolidated compound paths. Combining these automated digital patterns with precise cut-pressure calibration, correct mat selection, and environmental humidity control allows desktop plotters to produce high-performance, expandable paper packaging cleanly and consistently.