import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("n'accepte pas un username de moins de 7 caractères et restitue une erreur", async () => {
    const wrapper = shallowMount(Home);

    // n'accepte pas un `username` de moins de 7 caractères, exclut les espaces
    wrapper.setData({ username: " ".repeat(7) });

    // vérifie que `error` est restituée
    expect(wrapper.find(".error").text().length).toBeGreaterThan(0);

    // met à jour `username` afin qu'il soit suffisamment long
    wrapper.setData({ username: 'Lachlan' });
    await wrapper.vm.$nextTick();

    // vérifie que `error` n'est plus restituée
    expect(wrapper.find(".error").exists()).toBe(false);
  });
});

