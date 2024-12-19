fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const bannerData = data.bannerData;
    const sidebarData = data.sidebarData;
    const campaignData = data.campaignData;
    
    // Render banner data
    bannerData.forEach(item => {
      const bannerContent = document.querySelector('.banner');
      bannerContent.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <img src="${item.image}" alt="${item.title}">
        <a href="${item.buttonLink}" class="banner-button">${item.buttonText}</a>
      `;
    });
    
    // Render sidebar data
    sidebarData.forEach(item => {
      const sidebarContent = document.querySelector('.sidebar');
      const title = document.createElement('h5');
      title.textContent = item.title;
      const ul = document.createElement('ul');
      item.links.forEach(link => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${link.href}">${link.text}</a>`;
        ul.appendChild(li);
      });
      sidebarContent.appendChild(title);
      sidebarContent.appendChild(ul);
    });

    // Render campaign data into the carousel
    const campaignCarouselContent = document.getElementById('campaign-carousel-content');
    campaignData.forEach((item, index) => {
      const activeClass = index === 0 ? 'active' : '';
      const campaignItem = document.createElement('div');
      campaignItem.className = `carousel-item ${activeClass}`;
      campaignItem.innerHTML = `
        <div class="d-flex align-items-center justify-content-center flex-column">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <img src="${item.image}" alt="${item.title}" class="d-block w-100">
          <a href="${item.buttonLink}" class="btn btn-dark mt-3">${item.buttonText}</a>
        </div>
      `;
      campaignCarouselContent.appendChild(campaignItem);
    });
  });