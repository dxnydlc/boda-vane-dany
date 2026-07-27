
<!-- app content start -->
<div class="app-content-wrapper pt-13">

    <div class="container">

        <div class="page-header pb-7">
            <h2 class="fw-semibold fs-7">Inputs</h2>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item">Components</li>
                    <li class="breadcrumb-item active" aria-current="page">Inputs</li>
                </ol>
            </nav>
        </div> <!-- breadcrumb end -->

        <div class="page-content">

            <div class="row">

                <div class="col-xl-6">

                    <!-- default -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Basic Inputs</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">
                            <div class="demo-card-body-content">
                                <div class="mb-5">
                                    <label for="inputBasicEmail" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="inputBasicEmail" placeholder="name@example.com">
                                </div>
                                <div>
                                    <label for="inputBasicMessage" class="form-label">Message</label>
                                    <textarea class="form-control" id="inputBasicMessage" rows="5"></textarea>
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>

                    </div>

                    <!-- form text -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Form Text</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">
                                <label for="inputPassword5" class="form-label">Password</label>
                                <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
                                <div id="passwordHelpBlock" class="form-text">
                                    Your password must be 8-20 characters long.
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>

                    </div>

                    <!-- form control -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Form Controls</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">
                                <div class="mb-5">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="exampleFormControlInput1" class="form-label">Readonly</label>
                                    <input class="form-control" type="text" value="Readonly input here..." aria-label="readonly input example" readonly>
                                </div>
                                <div class="mb-5">
                                    <label for="exampleFormControlInput1" class="form-label">Disabled</label>
                                    <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled>
                                </div>
                                <div class="mb-5 row">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">Plaintext</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9 mb-5">
                                        <label for="formFile2" class="form-label">Default file input</label>
                                        <input class="form-control" type="file" id="formFile2">
                                    </div>
                                    <div class="col-md-3 mb-5">
                                        <div class="">
                                            <label for="exampleColorInput" class="form-label">Color picker</label>
                                            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#5F4AFE" title="Choose your color">
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label for="selectDefault" class="form-label">Default Select</label>
                                    <select id="selectDefault" class="form-select form-select-sm" aria-label="Small select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-5">
                                    <label for="selectMultiple" class="form-label">Default Select Multiple</label>
                                    <select id="selectMultiple" class="form-select" multiple aria-label="Multiple select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-5">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>

                    </div>

                    <!-- form types -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Basic Input Types</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeText" class="form-label m-0">Text</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="text" class="form-control" id="inputTypeText" placeholder="Text">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeEmail" class="form-label m-0">Email</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="email" class="form-control" id="inputTypeEmail" placeholder="Email">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypePhone" class="form-label m-0">Phone</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="tel" class="form-control" id="inputTypePhone" placeholder="Phone">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypePassword" class="form-label m-0">Password</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="password" class="form-control" id="inputTypePassword" placeholder="*********">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeUrl" class="form-label m-0">URL</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="url" class="form-control" id="inputTypeUrl" placeholder="URL">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeNumber" class="form-label m-0">Number</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" id="inputTypeNumber" placeholder="Number">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeColor" class="form-label m-0">Color</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="color" class="form-control" id="inputTypeColor" value="#5F4AFE">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeSearch" class="form-label m-0">Search</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="search" class="form-control" id="inputTypeSearch" placeholder="Keywords...">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeDate" class="form-label m-0">Date</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="date" class="form-control" id="inputTypeDate" value="2024-07-01">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeDateTime" class="form-label m-0">Date Time</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="datetime-local" class="form-control" id="inputTypeDateTime" value="2024-07-01T12:00:00">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="inputTypeTime" class="form-label m-0">Time</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="time" class="form-control" id="inputTypeTime" value="12:00:00">
                                    </div>
                                </div>
                                <div class="row align-items-center mb-3">
                                    <div class="col-md-2">
                                        <label for="customRange1" class="form-label m-0">Range</label>
                                    </div>
                                    <div class="col-md-10">
                                        <input type="range" class="form-range" id="customRange1">
                                    </div>
                                </div>

                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="col-xl-6">
                    <!-- with icon -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">With Icon</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">
                                <div class="mb-5">
                                    <label for="serachBothIcon" class="form-label">Both Icon</label>
                                    <div class="form-control-icon ">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.22221 13.4444C10.6586 13.4444 13.4444 10.6586 13.4444 7.22221C13.4444 3.78578 10.6586 1 7.22221 1C3.78578 1 1 3.78578 1 7.22221C1 10.6586 3.78578 13.4444 7.22221 13.4444Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 15L11.6167 11.6166" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <input type="text" class="" id="serachBothIcon" placeholder="Enter Keywords...">
                                        <button type="button" class="text-secondary">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0693 1.66223H1.06934L6.66934 8.28423V12.8622L9.46934 14.2622V8.28423L15.0693 1.66223Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label for="serachLeftIconLeft" class="form-label">Left Icon</label>
                                    <div class="form-control-icon ">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.22221 13.4444C10.6586 13.4444 13.4444 10.6586 13.4444 7.22221C13.4444 3.78578 10.6586 1 7.22221 1C3.78578 1 1 3.78578 1 7.22221C1 10.6586 3.78578 13.4444 7.22221 13.4444Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 15L11.6167 11.6166" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <input type="text" class="" id="serachLeftIconLeft" placeholder="Enter Keywords...">

                                    </div>
                                </div>
                                <div class="mb-5">
                                    <label for="serachRightIcon" class="form-label">Right Icon</label>
                                    <div class="form-control-icon ">

                                        <input type="text" class="" id="serachRightIcon" placeholder="Enter Keywords...">
                                        <button type="button" class="text-secondary">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.0693 1.66223H1.06934L6.66934 8.28423V12.8622L9.46934 14.2622V8.28423L15.0693 1.66223Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>
                    </div>
                    <!-- with floated -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Floated Label</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="form-floating">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="floatingSelect">Works with selects</label>
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>
                    </div>
                    <!-- sizes -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Sizes</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">
                                <div class="mb-5">
                                    <label for="inputSizeXL" class="form-label">Extra Large</label>
                                    <input type="email" class="form-control form-control-xl" id="inputSizeXL" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="inputSizeLG" class="form-label">Large</label>
                                    <input type="email" class="form-control form-control-lg" id="inputSizeLG" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="inputSizeNormal" class="form-label">Normal</label>
                                    <input type="email" class="form-control" id="inputSizeNormal" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="inputSizeSmall" class="form-label">Small</label>
                                    <input type="email" class="form-control form-control-sm" id="inputSizeSmall" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="inputSizeXS" class="form-label">Extra Small</label>
                                    <input type="email" class="form-control form-control-xs" id="inputSizeXS" placeholder="name@example.com">
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>
                    </div>
                    <!-- rounded -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Rounded</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">

                                <div class="mb-5">
                                    <label for="inputRounded" class="form-label">Large</label>
                                    <input type="email" class="form-control rounded-xl" id="inputRounded" placeholder="name@example.com">
                                </div>

                                <div class="mb-5">
                                    <label for="inputRoundedNormal" class="form-label">Normal</label>
                                    <input type="email" class="form-control rounded" id="inputRoundedNormal" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="inputRoundedSmall" class="form-label">Small</label>
                                    <input type="email" class="form-control rounded-sm" id="inputRoundedSmall" placeholder="name@example.com">
                                </div>
                                <div class="mb-5">
                                    <label for="inputRoundedPill" class="form-label">Pill</label>
                                    <input type="email" class="form-control rounded-pill" id="inputRoundedPill" placeholder="name@example.com">
                                </div>
                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>
                    </div>
                    <!-- files -->
                    <div class="demo-card  rounded-xl mb-5">
                        <div class="demo-card-header d-flex align-items-center justify-content-between px-6 py-5 ">
                            <h3 class="demo-card-title m-0">Files</h3>
                            <button type="button" class="btn btn-label-primary btn-xs d-flex align-items-center demo-show-code-btn">
                                <span>Show Code</span>
                                <svg class=" ms-1" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40015 8.60015L13.0002 5.00007L9.40015 1.39998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4.60009 1.39998L1 5.00007L4.60009 8.60015" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="demo-card-body">

                            <div class="demo-card-body-content">

                                <div class="mb-5">
                                    <label for="formFile" class="form-label">Default file input example</label>
                                    <input class="form-control" type="file" id="formFile">
                                </div>
                                <div class="mb-5">
                                    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                                </div>
                                <div class="mb-5">
                                    <label for="formFileDisabled" class="form-label">Disabled file input example</label>
                                    <input class="form-control" type="file" id="formFileDisabled" disabled>
                                </div>

                                <div>
                                    <label for="formFileLg" class="form-label">Large file input example</label>
                                    <input class="form-control form-control-lg" id="formFileLg" type="file">
                                </div>

                            </div>

                            <!-- code copy content -->
                            <div class="demo-card-body-code d-none position-relative">
                                <div class="btn-clipboard-wrapper">
                                    <button type="button" class="btn-clipboard position-absolute top-2 end-3 z-index-1 text-white" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="Copy to Clipboard" title="Copy to Clipboard">
                                        <svg width="14" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9443 3.33826H14.9443C15.4748 3.33826 15.9835 3.54897 16.3585 3.92404C16.7336 4.29912 16.9443 4.80782 16.9443 5.33826V19.3383C16.9443 19.8687 16.7336 20.3774 16.3585 20.7525C15.9835 21.1275 15.4748 21.3383 14.9443 21.3383H2.94434C2.4139 21.3383 1.9052 21.1275 1.53012 20.7525C1.15505 20.3774 0.944336 19.8687 0.944336 19.3383V5.33826C0.944336 4.80782 1.15505 4.29912 1.53012 3.92404C1.9052 3.54897 2.4139 3.33826 2.94434 3.33826H4.94434" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9443 1.33826H5.94434C5.39205 1.33826 4.94434 1.78597 4.94434 2.33826V4.33826C4.94434 4.89054 5.39205 5.33826 5.94434 5.33826H11.9443C12.4966 5.33826 12.9443 4.89054 12.9443 4.33826V2.33826C12.9443 1.78597 12.4966 1.33826 11.9443 1.33826Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <pre><code></code></pre>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div><!-- page content end -->

    </div>

</div>
<!-- app content end -->
