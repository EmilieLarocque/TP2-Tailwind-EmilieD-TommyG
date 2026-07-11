 document.addEventListener('DOMContentLoaded', function () {
      var statsContainer = document.getElementById('tournage-stats');
      if (!statsContainer) return;
 
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
 
          entry.target.querySelectorAll('.tournage-stats__value').forEach(function (el) {
            var target = parseFloat(el.dataset.target);
            var suffix = el.dataset.suffix || '';
            var count = 0;
 
            var interval = setInterval(function () {
              count++;
              el.textContent = count + suffix;
 
              if (count >= target) {
                clearInterval(interval);
                el.textContent = target.toString().replace('.', ',') + suffix;
              }
            }, 100);
          });
 
          observer.unobserve(entry.target);
        });
      });
 
      observer.observe(statsContainer);
    });