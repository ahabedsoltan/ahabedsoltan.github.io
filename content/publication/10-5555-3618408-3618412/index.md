---
title: Toward large kernel models
authors:
- Amirhesam Abedsoltan
- Mikhail Belkin
- Parthe Pandit
date: '2023-01-01'
publishDate: '2024-02-27T00:38:29.204876Z'
publication_types:
- paper-conference
publication: '*Proceedings of the 40th International Conference on Machine Learning*'
abstract: Recent studies indicate that kernel machines can often perform similarly
  or better than deep neural networks (DNNs) on small datasets. The interest in kernel
  machines has been additionally bolstered by the discovery of their equivalence to
  wide neural networks in certain regimes. However, a key feature of DNNs is their
  ability to scale the model size and training data size independently, whereas in
  traditional kernel machines model size is tied to data size. Because of this coupling,
  scaling kernel machines to large data has been computationally challenging. In this
  paper, we provide a way forward for constructing large-scale general kernel models,
  which are a generalization of kernel machines that decouples the model and data,
  allowing training on large datasets. Specifically, we introduce EigenPro 3.0, an
  algorithm based on projected dual preconditioned SGD and show scaling to model and
  data sizes which have not been possible with existing kernel methods. We provide
  a PyTorch based implementation which can take advantage of multiple GPUs.
---