const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const SUPABASE_URL = "https://fndnkiseothtahipisqa.supabase.co"

const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);