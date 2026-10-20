import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PortfolioRail from "./PortfolioRail";

const controls = vi.hoisted(() => ({ play: vi.fn(), stop: vi.fn(), scrollNext: vi.fn(), scrollPrev: vi.fn() }));
vi.mock("embla-carousel-auto-scroll", () => ({ default: () => controls }));
vi.mock("embla-carousel-react", () => ({ default: () => [() => {}, controls] }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal("IntersectionObserver", class {
    constructor(private callback: (entries: { isIntersecting: boolean }[]) => void) {}
    observe() { this.callback([{ isIntersecting: true }]); }
    disconnect() {}
  });
});
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("Portfolio automatic and manual movement", () => {
  it("automatically starts a visible rail and pauses during interaction", async () => {
    render(<PortfolioRail label="Design & Copy"><div>Work</div></PortfolioRail>);
    await waitFor(() => expect(controls.play).toHaveBeenCalled());
    controls.stop.mockClear();
    fireEvent.mouseEnter(screen.getByText("Work").parentElement?.parentElement as HTMLElement);
    expect(controls.stop).toHaveBeenCalled();
  });

  it("keeps the rail stopped while a work is open", () => {
    render(<PortfolioRail label="Design & Copy" paused><div>Work</div></PortfolioRail>);
    expect(controls.stop).toHaveBeenCalled();
    expect(controls.play).not.toHaveBeenCalled();
  });

  it("supports manual pause, resume and next navigation", async () => {
    render(<PortfolioRail label="Design & Copy"><div>Work</div></PortfolioRail>);
    await waitFor(() => expect(controls.play).toHaveBeenCalled());
    fireEvent.click(screen.getByRole("button", { name: "Pausar Design & Copy" }));
    expect(controls.stop).toHaveBeenCalled();
    controls.play.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "Retomar Design & Copy" }));
    expect(controls.play).toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Próximo em Design & Copy" }));
    expect(controls.scrollNext).toHaveBeenCalledOnce();
  });
});