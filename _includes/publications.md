<ol class="publication-list">
{% for paper in site.data.publications.main %}
<li class="publication" data-status="{{ paper.status }}">

<div class="paper-content"><div class="paper-meta"><span class="venue venue-{{ paper.short }}">{{ paper.venue }}</span><span class="paper-badge {{ paper.status }}">{{ paper.note }}</span></div><h3>{% if paper.pdf %}<a href="{{ paper.pdf }}">{{ paper.title }}</a>{% else %}{{ paper.title }}{% endif %}</h3><p class="authors">{{ paper.authors }}</p>{% if paper.pdf %}<a class="paper-link" href="{{ paper.pdf }}" aria-label="Read {{ paper.short }}">Read paper <span aria-hidden="true">↗</span></a>{% endif %}</div>

</li>
{% endfor %}
</ol>
