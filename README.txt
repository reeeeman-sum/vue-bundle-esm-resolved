Barebones express project to host vue-router's ESM bundle that has been resolved
to use Vue 3.3.4's CDN url, instead of the generic import Vue from 'vue';

This is because the new <script type="module" ~~~> jargon requires relative
and absolute paths client-side.
