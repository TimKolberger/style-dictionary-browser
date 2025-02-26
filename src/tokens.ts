import { DesignTokens } from "style-dictionary/types";

export const tokens: DesignTokens = {
  colors: {
    neutral: {
      "0": { value: "#070709" },
      "1": { value: "#0d0e11" },
      "2": { value: "#121316" },
      "3": { value: "#1a1c1f" },
      "4": { value: "#2e3036" },
      "5": { value: "#43474e" },
      "6": { value: "#5a5e68" },
      "7": { value: "#727782" },
      "8": { value: "#8a919e" },
      "9": { value: "#a6abb6" },
      "10": { value: "#c3c7ce" },
      "11": { value: "#e1e2e6" },
      "12": { value: "#edeef0" },
      "13": { value: "#f3f3f5" },
      "14": { value: "#ffffff" },
      origin: {
        base: {
          comment: "This is just to resolve the original origin color",
          value: "#646973",
        },
      },
      light: {
        origin: {
          default: { value: "#646973" },
          hovered: { value: "#4d5159" },
          pressed: { value: "#373a40" },
        },
        on: {
          origin: {
            default: { value: "#f9f9fa" },
            hovered: { value: "#dcdce2" },
            pressed: { value: "#c0c0cb" },
          },
        },
      },
      dark: {
        origin: {
          default: { value: "#646973" },
          hovered: { value: "#7c828e" },
          pressed: { value: "#969ca9" },
        },
        on: {
          origin: {
            default: { value: "#f9f9fa" },
            hovered: { value: "#dcdce2" },
            pressed: { value: "#c0c0cb" },
          },
        },
      },
    },
  },
};
