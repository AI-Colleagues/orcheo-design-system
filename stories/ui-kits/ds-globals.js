/* The UI kits under ui_kits/ are authored as browser scripts: they read
   window.React and window.OrcheoDesignSystem_f1e686 (the compiled DS bundle)
   at module top level. This shim supplies those globals from the real source
   modules so the kit files run unmodified inside Storybook.
   Import this module BEFORE any ui_kits file. */

import React from "react";

import { Button } from "../../components/buttons/Button.jsx";
import { IconButton } from "../../components/buttons/IconButton.jsx";
import { Input } from "../../components/forms/Input.jsx";
import { Textarea } from "../../components/forms/Textarea.jsx";
import { Select } from "../../components/forms/Select.jsx";
import { Checkbox } from "../../components/forms/Checkbox.jsx";
import { Switch } from "../../components/forms/Switch.jsx";
import { Badge } from "../../components/display/Badge.jsx";
import { Tag } from "../../components/display/Tag.jsx";
import { Avatar, AvatarGroup } from "../../components/display/Avatar.jsx";
import { Card } from "../../components/display/Card.jsx";
import { NodeChip } from "../../components/display/NodeChip.jsx";
import { Tabs } from "../../components/navigation/Tabs.jsx";
import { Tooltip } from "../../components/feedback/Tooltip.jsx";
import { Dialog } from "../../components/feedback/Dialog.jsx";
import { Toast, Toaster } from "../../components/feedback/Toast.jsx";

window.React = React;
window.OrcheoDesignSystem_f1e686 = {
  Button, IconButton, Input, Textarea, Select, Checkbox, Switch,
  Badge, Tag, Avatar, AvatarGroup, Card, NodeChip, Tabs,
  Tooltip, Dialog, Toast, Toaster,
};

/* The kits' index.html defines this keyframe for their run spinners. */
if (!document.querySelector("style[data-orc='kit-extras']")) {
  const el = document.createElement("style");
  el.setAttribute("data-orc", "kit-extras");
  el.textContent = "@keyframes orc-spin { to { transform: rotate(360deg); } }";
  document.head.appendChild(el);
}
