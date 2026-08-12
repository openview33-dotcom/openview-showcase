import math
GREEN,TEAL,GOLD,ORANGE,PURPLE,DPURPLE='#84cf8c','#57c6b2','#f3c451','#ef9f5f','#a06bd0','#8a56c4'
INK,MUTED,GRID='#3a3a3a','#7a7168','#e6ddd6'
PAL=[PURPLE,GOLD,TEAL,GREEN,ORANGE,DPURPLE]

def _nice(m):
    if m<=0: return 1
    e=10**math.floor(math.log10(m)); f=m/e
    for s in (1,2,2.5,5,10):
        if f<=s: return s*e
    return 10*e

def combo(cats, counts, line, line_label, bar_label, val_fmt=lambda v:f'{v:g}'):
    W,H,L,R,T,B=620,300,50,56,40,40
    pw,ph=W-L-R,H-T-B; n=len(cats); band=pw/n
    lmax=_nice(max(counts) or 1); rmax=_nice(max(line) or 1)
    s=[f'<svg viewBox="0 0 {W} {H}" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI,Arial,sans-serif">']
    s.append(f'<defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ad6a2"/><stop offset="1" stop-color="#57c6b2"/></linearGradient></defs>')
    for g in range(5):
        y=T+ph-ph*g/4; v=lmax*g/4
        s.append(f'<line x1="{L}" y1="{y:.1f}" x2="{L+pw}" y2="{y:.1f}" stroke="{GRID}" stroke-width="1"/>')
        s.append(f'<text x="{L-8}" y="{y+4:.1f}" font-size="11" fill="{MUTED}" text-anchor="end">{v:g}</text>')
    for g in range(5):
        y=T+ph-ph*g/4; v=rmax*g/4
        s.append(f'<text x="{L+pw+10}" y="{y+4:.1f}" font-size="11" fill="{DPURPLE}" text-anchor="start">{v:g}</text>')
    for i,c in enumerate(counts):
        bw=band*0.46; x=L+band*i+(band-bw)/2; h=c/lmax*ph; y=T+ph-h
        s.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{bw:.1f}" height="{h:.1f}" rx="4" fill="url(#bg)"/>')
        s.append(f'<text x="{x+bw/2:.1f}" y="{y-6:.1f}" font-size="11" fill="{INK}" text-anchor="middle">{c:g}</text>')
        s.append(f'<text x="{L+band*i+band/2:.1f}" y="{T+ph+22:.1f}" font-size="12" fill="{INK}" text-anchor="middle">{cats[i]}</text>')
    pts=[]
    for i,v in enumerate(line):
        x=L+band*i+band/2; y=T+ph-v/rmax*ph; pts.append((x,y))
    s.append('<polyline points="'+' '.join(f'{x:.1f},{y:.1f}' for x,y in pts)+f'" fill="none" stroke="{DPURPLE}" stroke-width="2.5"/>')
    for i,(x,y) in enumerate(pts):
        s.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4.5" fill="{DPURPLE}"/>')
        s.append(f'<text x="{x:.1f}" y="{y-10:.1f}" font-size="10.5" fill="{DPURPLE}" text-anchor="middle" font-weight="700">{val_fmt(line[i])}</text>')
    # legend
    lx=L; ly=18
    s.append(f'<rect x="{lx}" y="{ly-9}" width="13" height="13" rx="3" fill="url(#bg)"/><text x="{lx+18}" y="{ly+2}" font-size="12" fill="{MUTED}">{bar_label}</text>')
    lx2=lx+150
    s.append(f'<line x1="{lx2}" y1="{ly-2}" x2="{lx2+20}" y2="{ly-2}" stroke="{DPURPLE}" stroke-width="2.5"/><circle cx="{lx2+10}" cy="{ly-2}" r="4" fill="{DPURPLE}"/><text x="{lx2+28}" y="{ly+2}" font-size="12" fill="{MUTED}">{line_label}</text>')
    s.append('</svg>')
    return ''.join(s)

def hbars(rows):  # rows: (label, value, display)
    mx=max(v for _,v,_ in rows) or 1
    out=['<div class="hbwrap">']
    for lab,v,disp in rows:
        pct=v/mx*100
        out.append(f'<div class="hb"><span class="hbl">{lab}</span><div class="hbt"><div class="hbf" style="width:{pct:.1f}%"></div></div><span class="hbv">{disp}</span></div>')
    out.append('</div>')
    return ''.join(out)

def _br(v):
    if abs(v-round(v))<1e-9: return f'{int(round(v)):,}'.replace(',','.')
    return f'{v:.1f}'.replace('.',',')

def donut(items, center_top='', center_bot='', size=210, value_is_pct=False):
    tot=sum(v for _,v,_ in items) or 1
    stops=[]; acc=0
    for _,v,c in items:
        a0=acc/tot*360; acc+=v; a1=acc/tot*360
        stops.append(f'{c} {a0:.1f}deg {a1:.1f}deg')
    conic=f'background:conic-gradient({",".join(stops)});'
    if value_is_pct:
        leg=''.join(f'<div class="dgl"><span class="dgs" style="background:{c}"></span>{lab} <b>{_br(v)}%</b></div>' for lab,v,c in items)
    else:
        leg=''.join(f'<div class="dgl"><span class="dgs" style="background:{c}"></span>{lab} <b>{_br(v)}</b> <span class="dgp">({v/tot*100:.1f}%)</span></div>' for lab,v,c in items)
    ct=f'<div class="dctr"><div class="dct-t">{center_top}</div><div class="dct-b">{center_bot}</div></div>' if center_top or center_bot else ''
    return f'<div class="donutwrap"><div class="donut" style="width:{size}px;height:{size}px;{conic}"><div class="donuthole">{ct}</div></div><div class="dleg">{leg}</div></div>'

def funnel(stages):  # stages: (label, value_str, pct_note)
    W,H,cx=560,430,280
    wt=[470,352,262,196]; wb=[352,262,196,150]; cols=[PURPLE,TEAL,GOLD,ORANGE]
    hh,gap,y=74,30,14
    s=[f'<svg viewBox="0 0 {W} {H}" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI,Arial,sans-serif">']
    for i,(lab,val,note) in enumerate(stages):
        t,b=wt[i],wb[i]; c=cols[i]
        p=f'{cx-t/2:.0f},{y} {cx+t/2:.0f},{y} {cx+b/2:.0f},{y+hh} {cx-b/2:.0f},{y+hh}'
        s.append(f'<polygon points="{p}" fill="#ffffff" stroke="{c}" stroke-width="2.5"/>')
        s.append(f'<text x="{cx}" y="{y+hh/2-4}" font-size="16" fill="{INK}" text-anchor="middle" font-weight="600">{lab}</text>')
        s.append(f'<text x="{cx}" y="{y+hh/2+18}" font-size="20" fill="{c}" text-anchor="middle" font-weight="800">{val}</text>')
        if note:
            s.append(f'<text x="{cx+t/2+14}" y="{y+hh+gap/2+2}" font-size="12.5" fill="{MUTED}" text-anchor="start">{note}</text>')
        y+=hh+gap
    s.append('</svg>')
    return ''.join(s)
