# Commercial GTM Lab

An interactive, outside-in commercial territory hypothesis created for Cursor's
Commercial Account Executive role in London.

The prototype demonstrates:

- account prioritisation using a cited, transparent scoring model;
- evidence-backed buying groups with verified people or functions, assumed deal
  roles, confidence levels, and discovery unknowns;
- account-level commercial timelines that show a focused product evaluation
  nested inside the complete sales cycle;
- evidence-led account hypotheses and buying groups;
- a backwards pipeline calculator; and
- an interactive 30/60/90-day execution plan.

Each account score uses four equally weighted dimensions—engineering evidence,
AI signal, growth trigger, and commercial fit—rated from 0 to 5. Every rating
links to the public evidence supporting it. Scores measure evidence strength,
not purchase intent.

All account recommendations are explicitly labelled as hypotheses. The project
uses no internal Cursor or customer data. Research was checked on 22 July 2026.

## Run locally

No build step or dependencies are required:

```bash
python3 -m http.server 4173
```

Then visit [http://localhost:4173](http://localhost:4173).
