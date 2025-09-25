import { renderFooter } from "./footer";
import { renderHeader } from "./header";
import { renderHero } from "./hero";
import { renderSection } from "./section";

const body = document.body;
await renderHeader(body);
await renderHero(body);
await renderSection(body);
renderFooter(body);
