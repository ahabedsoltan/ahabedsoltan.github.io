---
title: "On Emergence of Clean-Priority Learning in Early Stopped Neural Networks"
authors:
- Chaoyue Liu
- Amirhesam Abedsoltan
- Mikhail Belkin
- 
date: "2019-04-07T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2023-06-05T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: When random label noise is added to a training dataset, the prediction error of a neural network on a label-noise-free test dataset initially improves during early training but eventually deteriorates, following a U-shaped dependence on training time. This behaviour is believed to be a result of neural networks learning the pattern of clean data first and fitting the noise later in the training, a phenomenon that we refer to as clean-priority learning. In this study, we aim to explore the learning dynamics underlying this phenomenon. We theoretically demonstrate that, in the early stage of training, the update direction of gradient descent is determined by the clean subset of training data, leaving the noisy subset has minimal to no impact, resulting in a prioritization of clean learning. Moreover, we show both theoretically and experimentally, as the clean-priority learning goes on, the dominance of the gradients of clean samples over those of noisy samples diminishes, and finally results in a termination of the clean-priority learning and fitting of the noisy samples.


tags:
- Source Themes
featured: false


url_pdf: https://arxiv.org/pdf/2306.02533.pdf
url_code: ''
url_dataset: '#'
url_poster: '#'
url_project: ''
url_slides: ''
url_source: '#'
url_video: '#'


---

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
