import { renderFooter } from "./footer";
import { renderHeader } from "./header";
import { renderHero } from "./hero";
import { renderSection } from "./section";

const body = document.body;
renderHeader(body);
renderHero(body);
renderSection(body);
renderFooter(body);
