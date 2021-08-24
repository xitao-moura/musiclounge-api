'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">musiclounge-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-1bff8b68f172739449856b9b244e0b97"' : 'data-target="#xs-controllers-links-module-AppModule-1bff8b68f172739449856b9b244e0b97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1bff8b68f172739449856b9b244e0b97"' :
                                            'id="xs-controllers-links-module-AppModule-1bff8b68f172739449856b9b244e0b97"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' : 'data-target="#xs-controllers-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' :
                                            'id="xs-controllers-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' : 'data-target="#xs-injectables-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' :
                                        'id="xs-injectables-links-module-AuthModule-628dc9857e1526c070a450268a4d9950"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriasModule.html" data-type="entity-link">CategoriasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' : 'data-target="#xs-controllers-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' :
                                            'id="xs-controllers-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriasController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriasController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' : 'data-target="#xs-injectables-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' :
                                        'id="xs-injectables-links-module-CategoriasModule-19a03feacbb546dcf375b617a5db655f"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriasService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CategoriasService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CidadesModule.html" data-type="entity-link">CidadesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' : 'data-target="#xs-controllers-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' :
                                            'id="xs-controllers-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' }>
                                            <li class="link">
                                                <a href="controllers/CidadesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CidadesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' : 'data-target="#xs-injectables-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' :
                                        'id="xs-injectables-links-module-CidadesModule-2bf23ed3e91077599187f320d0708fe4"' }>
                                        <li class="link">
                                            <a href="injectables/CidadesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CidadesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EstadosModule.html" data-type="entity-link">EstadosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' : 'data-target="#xs-controllers-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' :
                                            'id="xs-controllers-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' }>
                                            <li class="link">
                                                <a href="controllers/EstadosController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EstadosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' : 'data-target="#xs-injectables-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' :
                                        'id="xs-injectables-links-module-EstadosModule-8730e355c597769b733c1fb8fba258f2"' }>
                                        <li class="link">
                                            <a href="injectables/EstadosService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EstadosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StatusModule.html" data-type="entity-link">StatusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' : 'data-target="#xs-controllers-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' :
                                            'id="xs-controllers-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' }>
                                            <li class="link">
                                                <a href="controllers/StatusController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StatusController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' : 'data-target="#xs-injectables-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' :
                                        'id="xs-injectables-links-module-StatusModule-dbab04588b7ea33bdef6a1e1d037d629"' }>
                                        <li class="link">
                                            <a href="injectables/StatusService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StatusService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TiposModule.html" data-type="entity-link">TiposModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' : 'data-target="#xs-controllers-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' :
                                            'id="xs-controllers-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' }>
                                            <li class="link">
                                                <a href="controllers/TiposController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TiposController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' : 'data-target="#xs-injectables-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' :
                                        'id="xs-injectables-links-module-TiposModule-873f04a80fe9770fc2006f8814baf03e"' }>
                                        <li class="link">
                                            <a href="injectables/TiposService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TiposService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' : 'data-target="#xs-controllers-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' :
                                            'id="xs-controllers-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' : 'data-target="#xs-injectables-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' :
                                        'id="xs-injectables-links-module-UsersModule-e272ef5aad463dd946234543aa3d5b36"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCategoriaDto.html" data-type="entity-link">CreateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCidadeDto.html" data-type="entity-link">CreateCidadeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEstadoDto.html" data-type="entity-link">CreateEstadoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateStatusDto.html" data-type="entity-link">CreateStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTipoDto.html" data-type="entity-link">CreateTipoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoriaDto.html" data-type="entity-link">UpdateCategoriaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCidadeDto.html" data-type="entity-link">UpdateCidadeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEstadoDto.html" data-type="entity-link">UpdateEstadoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateStatusDto.html" data-type="entity-link">UpdateStatusDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTipoDto.html" data-type="entity-link">UpdateTipoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link">LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Categoria.html" data-type="entity-link">Categoria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cidade.html" data-type="entity-link">Cidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Estado.html" data-type="entity-link">Estado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Status.html" data-type="entity-link">Status</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tipo.html" data-type="entity-link">Tipo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});