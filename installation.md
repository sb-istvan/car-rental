## Installation

### Prerequisites

In order to try this website on your machine locally, you need to install the following applications:

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com/downloads)
- Docker ([Windows](https://docs.docker.com/desktop/install/windows-install/), [MacOS](https://docs.docker.com/desktop/install/mac-install/), or [Linux](https://docs.docker.com/desktop/install/linux-install/)).

### Source code

- Clone this repository to your machine with the command `git clone https://github.com/sb-istvan/car-rental`

- Install the necessary node dependencies: `npm install`

### Install Supabase locally

Supabase provides the backend infrastructure for this project.

- Install Supabase service locally on either [npm](https://supabase.com/docs/guides/cli/getting-started?platform=npm), [Windows](https://supabase.com/docs/guides/cli/getting-started?platform=windows), [MacOS](https://supabase.com/docs/guides/cli/getting-started?platform=macos) or [Linux](https://supabase.com/docs/guides/cli/getting-started?platform=linux)
- To start your local Supabase instance, go to `car-rental` directory and type `supabase start` (or `npx supabase start` if you installed Supabase via npm)  
  Once running, Supabase dashboard is available at http://localhost:54323

### Accessing the site

Start the development server: `npm run dev`

The address is http://localhost:5173

In order to add, modify or delete a car, you need to sign up. The email address doesn't have to be real because email confirmation is switched off for local development.

And that's it. :)
