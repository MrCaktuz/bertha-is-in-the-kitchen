import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipeCompoTest extends Schema.Component {
  collectionName: 'components_compo_test_compo_tests';
  info: {
    displayName: 'ingredients';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    quantity: Attribute.Decimal & Attribute.Required;
    unit: Attribute.Enumeration<['g', 'Kg', 'L', 'ml', 'cl', 'p']> &
      Attribute.DefaultTo<'p'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipe.compo-test': RecipeCompoTest;
    }
  }
}
