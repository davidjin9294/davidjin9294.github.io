---
permalink: /
title: "Background"
description: "Computational biologist studying cancer epigenomics, human genetics, and gene regulation."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="home-intro" markdown="1">

I am an Associate Computational Biologist at Dana-Farber Cancer Institute and Harvard Medical School, working with Dr. Sylvan Baca and Dr. Matthew Freedman. My research uses circulating chromatin and cell-free DNA to study gene regulation and cancer epigenomics.

My research interests center on understanding how genetic variation, chromatin organization, and epigenetic modifications interact to regulate gene expression and cellular states. Ultimately, I hope to determine how dysregulation of these processes contributes to human disease and translate these insights into molecular biomarkers and minimally invasive approaches for early disease detection and monitoring.

Previously, I worked with Dr. Valerie Arboleda at the University of California, Los Angeles (UCLA), investigating host factors associated with variable clinical outcomes in patients with coccidioidomycosis.

</div>

<section class="home-section" id="education" markdown="1">

## Education
{: #education-heading }

<div class="resume-entry">
  <div class="resume-entry__details">
    <strong>University of California, Los Angeles</strong>
    <ul class="resume-entry__subitems">
      <li>B.S. in Computer Science</li>
      <li>GPA: 3.98/4.00 · summa cum laude</li>
    </ul>
  </div>
  <span class="resume-entry__date">September 2021 – June 2025</span>
</div>

</section>

<section class="home-section" id="research" markdown="1">

## Research
{: #research-heading }

<div class="research-position">
  <header class="research-position__header">
    <div class="research-position__details">
      <strong>Dana-Farber Cancer Institute &amp; Harvard Medical School</strong><br>
      Associate Computational Biologist<br>
      <a href="https://bacalab.dana-farber.org/">Baca Lab</a> · <a href="https://labs.dana-farber.org/freedmanlab/">Freedman Lab</a>
    </div>
    <span class="research-position__date">August 2025 – present</span>
  </header>

<div class="research-theme" markdown="1">

### Plasma Chromatin Reveals Genetic Effects on Gene Expression, Proteins, and Disease Risk

- Mapped cell-free chromatin QTLs and colocalized them with tissue and immune-cell molecular QTLs to identify shared regulatory signals.
- Inferred gene expression from cfChIP-seq using APEX and mapped 4,622 cell-free expression QTLs, demonstrating strong effect-size concordance with GTEx eQTLs.
- Integrated chromatin activity models with plasma protein QTLs and disease GWAS to link genetic variation to protein abundance and disease risk.

<p class="research-links" aria-label="Related publications">
  <a href="#publication-cfcqtl-natcomm-2026">[Nat Commun 2026]</a>
  <span aria-hidden="true">·</span>
  <a href="#poster-cfcqtl-aacr-2027">[AACR 2027 (Submitted)]</a>
  <span aria-hidden="true">·</span>
  <a href="https://github.com/Baca-Lab/APEX">[APEX (GitHub)]</a>
  <span aria-hidden="true">·</span>
  <a href="#publication-apex-preprint">[APEX (Preprint)]</a>
</p>

</div>

<div class="research-theme" markdown="1">

### Cell-Free DNA Methylation in Cancer and Immune-Related Diseases

- Performed cell-type deconvolution and cancer subtyping in breast and small-cell lung cancer using cell-free MeDIP-seq, ultra-mild bisulfite sequencing (UMBS-seq), and enzymatic methylation sequencing (EM-seq).
- Characterized cfDNA methylation patterns in plasma, urine, cerebrospinal fluid, and serum in cancer and immune-related disease.

</div>

<div class="research-theme" markdown="1">

### Computational Methods for Cell-Free Epigenomics

- Developed a beta-binomial model of allelic imbalance to detect tumor-specific signal attenuation, validated against whole-genome sequencing and applied across 682 assays in 15 cancer types.
- Co-led SNAPIE, a Nextflow pipeline for reproducible cfChIP-seq and cfMeDIP-seq analysis.

<p class="research-links" aria-label="Related resources">
  <a href="https://github.com/Baca-Lab/SNAPIE">[SNAPIE (GitHub)]</a>
  <span aria-hidden="true">·</span>
  <a href="#publication-snap-preprint">[SNAPIE (Preprint)]</a>
  <span aria-hidden="true">·</span>
  <a href="#publication-cancer-cell-2026">[Cancer Cell 2026]</a>
</p>

</div>

</div>

<div class="research-position">
  <header class="research-position__header">
    <div class="research-position__details">
      <strong>University of California, Los Angeles</strong><br>
      Undergraduate Student Researcher<br>
      <a href="https://www.arboledalab.org/">Arboleda Lab</a>
    </div>
    <span class="research-position__date">March 2024 – June 2025</span>
  </header>

<div class="research-theme" markdown="1">

### Genetic and Transcriptomic Determinants of Disseminated Coccidioidomycosis

- Conducted ancestry-aware GWAS and identity-by-descent analyses of 795 individuals with coccidioidomycosis, identifying 5 loci nominally associated with dissemination.
- Identified upregulation of interferon-response genes *IFI44* and *IFI44L* in disseminated disease from whole-blood RNA-seq of 267 individuals.

<p class="research-links" aria-label="Related publication">
  <a href="#publication-coccidioidomycosis-preprint">[Preprint]</a>
</p>

</div>

</div>

</section>

<section class="home-section" id="publications" markdown="1">

## Publications
{: #publications-heading }

{% assign sorted_publications = site.publications | sort: "list_order" %}
{% assign publication_number = 0 %}
{% for category in site.publication_category %}
{% assign category_publications = sorted_publications | where: "category", category[0] %}
{% if category_publications.size > 0 %}
<h3>{{ category[1].title }}</h3>
{% for post in category_publications %}
{% assign publication_number = publication_number | plus: 1 %}
<article class="publication-entry"{% if post.anchor_id %} id="{{ post.anchor_id }}"{% endif %}>
  <span class="publication-entry__number">[{{ publication_number }}]</span>
  <div class="publication-entry__body">
    <h4><a href="{{ post.paperurl }}">{{ post.title }}</a></h4>
    <p class="publication-entry__meta">{% if post.category == 'published' %}<em>{{ post.venue }}</em> · {{ post.published_year }}{% elsif post.category == 'accepted' %}<em>{{ post.venue }}</em> · Preprint {{ post.date | date: "%Y" }}{% elsif post.preprint_only %}Preprint {{ post.date | date: "%Y" }}{% else %}{{ post.status }}{% if post.venue %} at <em>{{ post.venue }}</em>{% endif %} · Preprint {{ post.date | date: "%Y" }}{% endif %}</p>
    <p class="publication-entry__authors">{{ post.authors }}</p>
  </div>
</article>
{% endfor %}
{% endif %}
{% endfor %}

### Conference posters and abstracts

{% for poster in site.data.posters %}
<article class="publication-entry"{% if poster.anchor_id %} id="{{ poster.anchor_id }}"{% endif %}>
  <span class="publication-entry__number">[{{ forloop.index }}]</span>
  <div class="publication-entry__body">
    <h4>{{ poster.title }}</h4>
    <p class="publication-entry__authors">{{ poster.authors }}</p>
    <p class="publication-entry__meta">{{ poster.venue }}, {{ poster.year }}{% if poster.status %} · {{ poster.status }}{% endif %}</p>
  </div>
</article>
{% endfor %}

</section>

<script src="/assets/js/research-highlights.js?v={{ site.time | date: '%s' }}" defer></script>
