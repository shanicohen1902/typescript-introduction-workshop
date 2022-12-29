import { expect, it } from "vitest";
import fetch from 'node-fetch';

const url='https://en.wikipedia.org/w/api.php?action=query&formatversion=2&prop=revisions&rvprop=content&rvslots=%2A&titles=pizza&format=json'

