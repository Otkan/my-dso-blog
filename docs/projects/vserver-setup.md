# V-Server Setup

## Table of Contents

- [Description](#description)
- [Quickstart](#quickstart)
- [Configuration Steps](#configuration-steps)
- [Security Measures](#security-measures)

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
    link="https://github.com/Otkan/v-server-setup"
    title="GitHub Repository"
    type="tip"
/>

## Description

This project documents the setup and hardening of my first Linux cloud server as part of the Developer Akademie DevSecOps course.

The focus of the project was learning the fundamentals of secure server administration, including SSH authentication, disabling password-based logins, restricting root access and documenting the complete setup process.

## Quickstart

1. Create an SSH key pair on your local machine.
2. Connect to the server using the credentials provided by the cloud provider.
3. Copy your public key to the server:

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub <user>@<server-ip>
```

4. Verify that SSH login via key authentication works.
5. Disable password authentication.
6. Disable direct root login.
7. Test the configuration from a new terminal session.

## Configuration Steps

The documented setup includes:

- SSH key authentication
- Secure SSH configuration
- Password authentication disabled
- Root login disabled
- Basic Linux server administration
- Verification of the final configuration

## Security Measures

The following security improvements were implemented:

- Public-key authentication
- Disabled password login
- Disabled root login
- Reduced attack surface for SSH access

