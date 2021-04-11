import { Directive } from '@vue/runtime-core';

const highlight: Directive = {
    beforeMount(el: HTMLElement, binding) {
        // console.log(el);
        // console.log(binding.arg);
        // console.log(binding.modifiers);
        // console.log(binding.value);
        if (binding.arg === 'background') {
            el.style.background = binding.value;
        } else {
            el.style.color = binding.value;
        }

        if (binding.modifiers.shadow) {
            el.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)';
        }
    },
};

export default highlight;
